const { User } = require('../models');

const userData =
[
  {
    "username": "Piero2023",
    "email": "Piero2023@hotmail.com",
    "password": "Piero2005"
  },
  {
    "username": "Adam2023",
    "email": "Adam2023@hotmail.com",
    "password": "Adam2023",
    "favorite": "3"
  },
  {
    "username": "Xing2023",
    "email": "Xing@hotmail.com",
    "password": "Xing2023"
  },
  {
    "username": "John2023",
    "email": "John2023@yahoo.com",
    "password": "John222"
  },
  {
    "username": "Tommyboy11",
    "email": "Tom2023@gmail.com",
    "password": "Tom111"
  }
]

const seedUsers = () => {
  const validUsers = userData.filter(user => user.username.trim() !== "");

  return User.bulkCreate(validUsers);
};

module.exports = seedUsers;