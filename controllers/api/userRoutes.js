const router = require('express').Router();
const {User} = require('../../models');
const validator = require('validator');
const withAuth = require('../../utils/auth.js');
// logs in user
router.post('/login', async (req,res) => {
    console.log(validator.normalizeEmail(req.body.email));
    const serEmail = validator.normalizeEmail(req.body.email);
    try {
        const userData = await User.findOne({
            where: {
                email: serEmail
            }
        });
        if (!userData) {
            res.status(404).json({message: 'Incorrect email or password'});
            return;
        }
        const validatePass = await userData.checkPass(req.body.password);
        if (!validatePass) {
            res.status(404).json({message: 'Incorrect email or password'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({user: userData, message: 'Logged in!'})
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// creates user
router.post('/', async (req,res) => {
    try {
        const newUser = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json({newUser, message: 'Account created'})
        });
        console.log(newUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// logs out user
router.post('/logout', (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        })
    }
    else {
        res.status(404).end();
    }
});

// route to update user's name while logged in
router.put('/name', withAuth, async (req,res) => {
    try {
        const userData = await User.findByPk(req.session.user_id);
        userData.username = req.body.newName;
        await userData.save();
        res.status(200).json({message: 'Name updated!', userData});
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;