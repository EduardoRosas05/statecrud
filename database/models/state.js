'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class state extends Model {
  

    static associate(models) {
      models.State.hasMany(models.City,
        {
          as: "cities",
        })
    }
  }
  state.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'state',
  });
  return state;
};