'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listareserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  listareserva.init({
    libro: DataTypes.STRING,
    Ndocumento: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    fechareserva: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'listareserva',
  });
  return listareserva;
};