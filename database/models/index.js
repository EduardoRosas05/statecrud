'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

import state from './state';
import city from './city';
import localy from './localy';
import address from './address';


db.State = state(sequelize, Sequelize.DataTypes);
db.City = city(sequelize, Sequelize.DataTypes);
db.Localy = localy(sequelize, Sequelize.DataTypes);
db.Address = address(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}); 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
