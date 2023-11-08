const { Comment } = require('../models');

const commentData = [
    {
        text: "No way!",
        user_id: 2,
        comic_id: 1,
        date_created: "11/3/2023",
        
    },
    {
        text: "My First Comment :)",
        user_id: 2,
        comic_id: 2,
        date_created: "11/3/2023",
        
    },
    {
        text: "This is my favorite super hero comic!",
        user_id: 4,
        comic_id: 3,
        date_created: "11/3/2023",
        
    },
    {
        text: "Great read.",
        user_id: 3,
        comic_id: 2,
        date_created: "11/3/2023",
        
    },
    {
        text: "Very cool.",
        user_id: 3,
        comic_id: 1,
        date_created: "11/3/2023",
        
    },
    {
        text: "Awesome Comic",
        user_id: 2,
        comic_id: 3,
        date_created: "11/3/2023",
        
    },
    {
        text: "I hope Marvel makes more comics like this",
        user_id: 5,
        comic_id: 2,
        date_created: "11/3/2023",
        
    },
    {
        text: "I'd like to read more content like this.",
        user_id: 2,
        comic_id: 1,
        date_created: "11/3/2023",
        
    }
];

// const seedComments = async () => await Comment.bulkCreate(commentData);

// module.exports = seedComments;