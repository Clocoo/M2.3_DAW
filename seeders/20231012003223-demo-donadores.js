'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Donadores",[
      {
        IdDonador: 1,
        IdPersona: 1,
        IdProyecto: 2,
        CantDonada: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        IdDonador: 2,
        IdPersona: 2,
        IdProyecto: 1,
        CantDonada: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        IdDonador: 3,
        IdPersona: 3,
        IdProyecto: 3,
        CantDonada: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Donadores",{},
    {});
  }
};
