const router = require('express').Router();
const {User} = require('../../models');

// logs in user
router.post('/login', async (req,res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.email
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
            req.session.user_id = userData.isSoftDeleted;
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
            res.status(200).json(newUser, {message: 'You are logged in!'})
        });
    }
    catch {
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

module.exports = router;