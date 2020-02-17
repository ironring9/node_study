const express = require('express');
const multer = require('multer');

const { isLoggedIn } = require('./middlewares');
const { User } = require('../models');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        await user.addFollowing(parseInt(req.params.id, 10));
        res.send('success');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/:param/hangupFollowing', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        const followingId = req.params.param.split('|')[1];
        await user.removeFollowing(parseInt(followingId, 10));
        res.send('success');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/:param/hangupFollower', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        const followerId = req.params.param.split('|')[1];
        await user.removeFollower(parseInt(followerId, 10));
        res.send('success');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

const test = multer()
router.post('/update', isLoggedIn, test.none(), async (req, res, next) => {
    try {
        await User.update({
            nick: req.body.nick
        },
        {
            where: { id: req.body.id }
        })

        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;