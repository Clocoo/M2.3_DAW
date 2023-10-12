'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Donatarios', {
      IdDonatario: {
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
    await queryInterface.dropTable('Donatarios');
  }
};