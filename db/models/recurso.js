'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recurso.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    isbn: DataTypes.STRING,
    serie: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recurso',
  });
  return recurso;
};