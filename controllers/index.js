const router = require('express').Router();
const {Character, Comment, User} = require('../models');

// displays the homepage with featured characters
router.get('/', async (req,res) => {
    try {

    }
    catch (err) {
        res.status(500).json(err);
    }
});

// redirects the user to the homepage if already logged in
router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

module.exports = router;