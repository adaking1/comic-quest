const router = require('express').Router();
const { Character } = require('../../models');
// const axios = require('axios');
const { Op } = require('sequelize');
const API_KEY = 'b5086d49712e85d6d7638a6b82309664';

router.get('/characters', async (req, res) => {
  try {
    const characterName = req.query.name;

    if (!characterName) {
      return res.status(400).json({ error: 'Character name is required for search.' });
    }

    // Search for a single character in the database based on the provided name using Sequelize
    const character = await Character.findOne({
      where: {
        name: {
          [Op.iLike]: `${characterName}` // Case-insensitive search 
        }
      }
    });

    if (!character) {
      // If character not found in the database, make a request to the external API
      const response = await axios.get(`/character/:id`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        },
        params: {
          name: characterName
        }
      });

      // Extract the character data from the API response
      const apiCharacter = response.data.results[0];

      // Create a new character record in the database based on the API response
      await Character.create({
        image: apiCharacter.image,
        name: apiCharacter.name,
        description: apiCharacter.description,
        comic_1: apiCharacter.comic_1,
        comic_2: apiCharacter.comic_2,
        comic_3: apiCharacter.comic_3
      });

      return res.json(apiCharacter);
    }

    // If character is found in the database, return it without making an API request
    res.json(character);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Character Server Error' });
  }
});

module.exports = router;
