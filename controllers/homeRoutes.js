const router = require('express').Router();
const {Character, Comment, User} = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', async (req,res) => {
    try {
        const featured = await Character.findAll({
            where: {
                featured: true
            }
        });
        const featuredCharacter = featured.map((char) => char.get({plain:true}));
        res.render('homepage', {featuredCharacter});
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// route to render user's profile
router.get('/profile', withAuth, async (req,res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']}
        });
        const user = userdata.get({plain:true});

        res.render('profile', {...user, loggedIn: req.session.logged_in});
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// redirects user to their profile if they are already logged in
// renders the login page if they are not logged in
router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});


module.exports = router;