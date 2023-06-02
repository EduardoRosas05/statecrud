'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class state extends Model {
  

    static associate(models) {
      models.state.hasMany(models.city,
        {
          as: "Municipios",
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