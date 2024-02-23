'use strict';

const { DataTypes } = require('sequelize')
const { USER_TABLE } = require('./../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     * Up with db:migrate
     */

    await queryInterface.createTable(USER_TABLE, {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name:{
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      email:{
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password:{
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     * Down with db:migrate:undo
     */

    await queryInterface.dropTable(USER_TABLE);
  }
};
