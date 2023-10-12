'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Proyectos",[
      {
        IdProyecto: 1,
        NombreProyecto: "PC GAMER",
        DescProyecto: "16 gb ram",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        IdProyecto: 2,
        NombreProyecto: "Mouse RGB",
        DescProyecto: "16 gb ram",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        IdProyecto: 3,
        NombreProyecto: "Teclado RGB",
        DescProyecto: "16 gb ram",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Proyectos",{},
    {});
  }
};
