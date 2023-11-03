const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comment-routes');
const comicRoutes = require('./comicRoutes');

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/comic', comicRoutes);

module.exports = router;

