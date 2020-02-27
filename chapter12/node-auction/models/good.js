module.exports = (sequelize, DataTypes) => (
    sequelize.define('good', {
        name: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true
    })
)