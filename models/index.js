const Comic = require('./Comic');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comic.hasMany(Comment, {
    foreignKey: 'comic_id'
});

Comment.belongsTo(Comic, {
    foreignKey: 'comic_id'
});

User.hasOne(Comic, {
    foreignKey: 'favorite'
});

Comic.hasMany(User, {
    foreignKey: 'favorite'
});





module.exports = {Comic, Comment, User};