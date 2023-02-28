'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Books.init({
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    genre: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
    timestamps:false,
    tableName: 'courses'
  });
  return Books;
};