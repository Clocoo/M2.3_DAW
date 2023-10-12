'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Proyecto.hasMany(models.Donador, {
        foreignKey: 'IdProyecto',
        as: 'donadores',
      });

      Proyecto.BelongsTo(models.Donatario, {
        foreignKey: "IdProyecto",
        as: 'donatario',
      });
    }
  }
  Proyecto.init({
    IdProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    NombreProyecto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DescProyecto: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Proyecto',
  });
  return Proyecto;
};