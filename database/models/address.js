'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {

    static associate(models) {
      // define association here
      models.Address.belongsTo(models.Localy,
        {
          as:'localy',
          foreignKey:'localyId'
        });

        //

      models.Address.hasMany(models.Client,
          {
            as: "clients",
          })
    }
  }
  address.init({
    name: DataTypes.STRING,
    exNumber: DataTypes.STRING,
    inNumber: DataTypes.STRING,
    cp: DataTypes.STRING,
    localyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};