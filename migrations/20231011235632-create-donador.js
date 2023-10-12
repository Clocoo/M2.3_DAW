'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Donadores', {
      IdDonador: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      IdPersona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Personas",
            key: "id",
        },
      },
      IdProyecto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Proyectos",
          key: "IdProyecto",
        },
      },
      CantDonada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.dropTable('Donadores');
  }
};