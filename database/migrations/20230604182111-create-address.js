'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      exNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      localyId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'localies',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};