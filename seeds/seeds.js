const seedUsers = require('./user');
const seedComments = require('./comment');
const seedComics = require('./comic');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedComics();
    await seedUsers();
    await seedComments();
    process.exit(0);
};

seedAll();