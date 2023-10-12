'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Donatarios",[
      {
        IdDonatario: 1,
        IdPersona: 1,
        IdProyecto: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        IdDonatario: 2,
        IdPersona: 2,
        IdProyecto: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        IdDonatario: 3,
        IdPersona: 3,
        IdProyecto: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Donatarios",{},
    {});
  }
};
