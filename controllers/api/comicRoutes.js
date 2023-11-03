const router = require('express').Router();
const { Comic } = require('../../models')


//Limits to 3 comics to the homepage for featured comics 
router.get('/', async (req, res) => {
    try {
        const dbComicData = await Comic.findAll({
            attributes: ['id', 
                        'title', 
                        'published_on', 
                        'filename'],
            limit: 3 
        });

        if (dbComicData.length === 0) {
            return res.status(404).json({ error: 'No comics were found' });
        }

        const homeComics = dbComicData.map(comic => comic.get({ plain: true }));
        res.render('homepage', { homeComics });
    } catch (err) {
        console.error(err);
        res.status(500).json({err});
    }
});



//Gets the comic by id 
router.get('/comic/:id', async (req, res) => {
    try {
        const dbComicData = await Comic.findByPk(req.params.id, {
            attributes: ['id', 
                        'title', 
                        'writer', 
                        'published_on', 
                        'filename', 
                        'description']
        });

        if (!dbComicData) {
            return res.status(404).json({ error: 'Comic not found' });
        }

        const comic = dbComicData.get({ plain: true });
        res.render('comic', { comic });
    } catch (err) {
        console.error(err);
        res.status(500).json({err});
    }
});

module.exports = router;