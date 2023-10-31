const { Comment } = require('../models');

const commentData = [
    {
        text: "No way!",
        user_id: 2,
        comic_id: 1,
        date_created: new Date(),
        
    },
    {
        text: "My First Comment :)",
        user_id: 2,
        comic_id: 2,
        date_created: new Date(),
        
    },
    {
        text: "This is my favorite super hero comic!",
        user_id: 4,
        comic_id: 3,
        date_created: new Date(),
        
    },
    {
        text: "Great read.",
        user_id: 3,
        comic_id: 2,
        date_created: new Date(),
        
    },
    {
        text: "Very cool.",
        user_id: 3,
        comic_id: 1,
        created_at: new Date(),
        
    },
    {
        text: "Awesome Comic",
        user_id: 2,
        comic_id: 3,
        date_created: new Date(),
        
    },
    {
        text: "I hope Marvel makes more comics like this",
        user_id: 5,
        comic_id: 2,
        date_created: new Date(),
        
    },
    {
        text: "I'd like to read more content like this.",
        user_id: 2,
        comic_id: 1,
        created_at: new Date(),
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;