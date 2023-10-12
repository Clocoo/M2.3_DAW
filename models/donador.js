'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donador.belongsTo(models.Persona, {
        foreignKey: 'id',
        as: 'donador',
      });
    
      Donador.belongsTo(models.Proyecto, {
        foreignKey: 'IdProyecto',
        as: 'proyecto',
      });
    }
  }
  Donador.init({
    IdDonador: {
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
    },
    CantDonada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Donador',
  });
  return Donador;
};