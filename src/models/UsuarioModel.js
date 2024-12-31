const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connections');

class UsuarioModel extends Model {};

// Definindo o modelo para a tabela
UsuarioModel.init(
{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // O id será auto-incrementado
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obrigatório
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obrigatório
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obrigatório
    unique: true,     // O email será único
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obrigatório
  }
    },
  {
    timestamps: false,
    sequelize: connection, 
    tableName: 'usuarios'
  }
);


module.exports = UsuarioModel;
