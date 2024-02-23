'use strict';

const { USER_TABLE } = require('./../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     */

    await queryInterface.addColumn(USER_TABLE, 'status', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     */

    await queryInterface.removeColumn(USER_TABLE, 'status')
  }
};
