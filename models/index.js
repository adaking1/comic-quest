const Character = require('./Character');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Character.hasMany(Comment, {
    foreignKey: 'comic_id'
});

Comment.belongsTo(Character, {
    foreignKey: 'comic_id'
});







module.exports = {Character, Comment, User};