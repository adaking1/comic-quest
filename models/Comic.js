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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        writer: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        published_on: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
        filename: {
            type: DataTypes.STRING 
        },
        description: {
            type: DataTypes.TEXT('long')
        },
        featured: {
            type: DataTypes.BOOLEAN
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