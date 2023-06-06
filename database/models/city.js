'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
  
  

    static associate(models) {

      models.City.belongsTo(models.State,
      {
        as:'state',
        foreignKey:'stateId'
      });

      //
      models.City.hasMany(models.Localy,
        {
          as: "localies",
        })
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