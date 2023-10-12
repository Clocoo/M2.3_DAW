'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Personas",[
      {
        id: 1,
        RFC: "1ASD",
        Nombre: "Osmar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        RFC: "2ASDDS",
        Nombre: "Javier",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        RFC: "3ASDASD",
        Nombre: "Torres",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Personas",{},
    {});
  }
};
