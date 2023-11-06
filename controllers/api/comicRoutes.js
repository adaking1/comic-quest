const router = require('express').Router();
const { Comic } = require('../../models')


//Limits to 3 comics to the homepage for featured comics 
// router.get('/', async (req, res) => {
//     try {
//         const dbComicData = await Comic.findAll({
//             attributes: ['id', 
//                         'title', 
//                         'published_on', 
//                         'filename'],
//             limit: 3 
//         });

//         if (dbComicData.length === 0) {
//             return res.status(404).json({ error: 'No comics were found' });
//         }

//         const homeComics = dbComicData.map(comic => comic.get({ plain: true }));
//         res.render('homepage', { homeComics });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({err});
//     }
// });

// takes the user's search and displays the searched comic
router.post('/', async (req,res) => {
    console.log(req.body.title);
    try {
        const comicData = await Comic.findOne({where:{title:req.body.title}});
        if (!comicData) {
            res.status(404).json({message: 'comic not found'});
            return;
        }
        const comic = comicData.get({plain:true});
        res.status(200).json({comic});
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Gets the comic by id 
router.get('/:id', async (req, res) => {
    try {
        const dbComicData = await Comic.findByPk(req.params.id);

        if (!dbComicData) {
            res.status(404).json({ error: 'Comic not found' });
            return;
        }

        const comic = dbComicData.get({ plain: true });
        res.render('comic', { comic });
    } catch (err) {
        console.error(err);
        res.status(500).json({err});
    }
});

module.exports = router;