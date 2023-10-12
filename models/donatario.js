'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donatario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donatario.belongsTo(models.Proyecto, {
        foreignKey: 'IdProyecto', // La clave foránea en Donatario que se relaciona con Proyecto
        as: 'proyecto', // Alias para la relación
      });

      Donatario.belongsTo(models.Persona, {
        foreignKey: 'id', // La clave foránea en Donatario que se relaciona con Proyecto
        as: 'donatario', // Alias para la relación
      });
    }
  }
  Donatario.init({
    IdDonatario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    IdPersona: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IdProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Donatario',
  });
  return Donatario;
};