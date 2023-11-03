const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comic extends Model {};

Comic.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
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

module.exports = Comic;