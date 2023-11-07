const router = require('express').Router();
const { Comment } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.findAll({});
        res.json(dbCommentData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/:id', (req,res) => {
    try{
    Comment.findAll({
        where: {
            id: req.params.id
        }
    })

    .then(dbCommentData => res.json(dbCommentData))
    }catch (err) {
        console.error(err)
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        if (req.session) {
            const dbCommentData = await Comment.create({
                text: req.body.text,
                user_id: req.body.user_id,
                comic_id: req.body.user_id,
            });
            res.json(dbCommentData);
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Bad Request' });
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const dbCommentData = await Comment.update(
            {
                text: req.body.text
            },
            {
                where: {
                    id: req.params.id, 
                }
            }
        );

        if (dbCommentData[0] === 0) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }

        res.json(dbCommentData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dbCommentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }

        res.json(dbCommentData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;