const router = require('express').Router();
const {Character, Comment, User} = require('../models');

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
router.get('/profile', async)


module.exports = router;