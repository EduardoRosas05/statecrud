'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
  
  

    static associate(models) {

      models.city.belongsTo(models.state,
        {
          as:'Estado',
          foreignKey:'stateId'
        });
    }
  }
  city.init({
    name: DataTypes.STRING,
    stateId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};