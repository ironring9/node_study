const { Good, Auction, User, sequelize } = require('./models');
const schedule = require('node-schedule');

module.exports = async () => {
    try {   
        const now = new Date();
        // 마감기한이 지난 상품들
        const targets = await Good.findAll({
            where: {
                soldId: null,
                deadline: { $lte: now }
            }
        });
        targets.forEach(async (target) => {
            scheduleJob(target);
        });

        // 마감기한이 지나지 않은 상품들 리스케쥴링
        const targets2 = await Good.findAll({
            where: {
                soldId: null,
                deadline: { $gt: now }
            }
        });
        targets2.forEach(async (target) => {
            schedule.scheduleJob(target.deadline, async () => {
                scheduleJob(target);
            });
        });

        async function scheduleJob (target) {
            const success = await Auction.findOne({
                where: { goodId: target.id },
                order: [['bid', 'DESC']]
            });
            await Good.update({ soldId: success.userId }, { where: { id: target.id }});
            await User.update({
                money: sequelize.literal(`money - ${success.bid}`)
            }, {
                where: { id: success.userId }
            });
        }
    } catch (error) {
        console.error(error);
    }
}