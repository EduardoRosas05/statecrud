'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  client.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    rfc: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'client',
  });
  return client;
};