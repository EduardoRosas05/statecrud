'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class localy extends Model {


    
    static associate(models) {
      // define association here
      models.Localy.belongsTo(models.City,
        {
          as:'city',
          foreignKey:'cityId'
        });

        //
      models.Localy.hasMany(models.Address,
        {
          as: "addresses",
        })
    }
  }
  localy.init({
    name: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'localy',
  });
  return localy;
};