const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comment-routes');
const characterRoutes = require('./characterRoutes')

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/characters', characterRoutes)

module.exports = router;

