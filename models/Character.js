const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {};

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        comic_1: {
            type: DataTypes.STRING
        },
        comic_2: {
            type: DataTypes.STRING
        },
        comic_3: {
            type: DataTypes.STRING
        }   
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comic'
    }
);

module.exports = Character;