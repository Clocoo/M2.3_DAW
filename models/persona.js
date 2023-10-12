'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Persona.hasMany(models.Donador, {
        foreignKey: 'id',
        as: 'donaciones',
      });

      Persona.hasMany(models.Donatario, {
        foreignKey: 'id', // La clave foránea en la tabla Donatario que se relaciona con Persona
        as: 'proyectosDelDonatario', // Alias para la relación
      });
    }
  }
  Persona.init({
    id: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    RFC: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};