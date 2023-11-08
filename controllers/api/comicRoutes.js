const router = require('express').Router();
const { Comic, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


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
        const commentData = await Comment.findAll({
            where: {
                comic_id: req.params.id
            },
            order: [['date_created', 'DESC']],
            include: {
                model: User,
                attributes: ['username']
            }
        });

        if (!dbComicData) {
            res.status(404).json({ error: 'Comic not found' });
            return;
        }
        if (!commentData) {
            res.json({message: 'No comments'});
            return
        }

        const comic = dbComicData.get({ plain: true });
        const comments = commentData.map((com) => com.get({plain:true}));
        comments.forEach((c) => {
            c.sameUser = c.user_id === req.session.user_id;
        });
        console.log(comments);
        res.render('comic', { comic, comments, loggedIn:req.session.logged_in});
    } catch (err) {
        console.error(err);
        res.status(500).json({err});
    }
});

// route to add comment to a comic while logged in
router.put('/:id', withAuth, async (req,res) => {
    try {
        const comicData = await Comic.findByPk(req.params.id);
        if (!comicData) {
            res.status(404).json({message: 'No comic found!'});
            return;
        }
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            comic_id: req.params.id,
            date_created: Date.now()
        });
        res.status(200).json(newComment);        
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;