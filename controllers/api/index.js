const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;

