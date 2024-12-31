const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connections'); // Conexão com o banco de dados
const ProdutoModel = require('../models/ProdutoModel');  // Importe o modelo de Produto para referência de chave estrangeira


class OpcaoProdutoModel extends Model {
  static associate({ ProdutoModel}){
    ProdutoModel.hasMany(OpcaoProdutoModel, { 
      foreignKey: 'product_id',
    });
    OpcaoProdutoModel.belongsTo(ProdutoModel, { 
      foreignKey: "product_id",
    });
    
  }
}

OpcaoProdutoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // A chave primária será auto-incrementada
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,  // A chave estrangeira é obrigatória
      references: {
        model: ProdutoModel,  // Relacionamento com o modelo Produto
        key: 'id',  // Referência à chave primária da tabela de produtos
      },
      onDelete: 'CASCADE',  // Apaga as opções associadas ao produto quando ele for excluído
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,  // Título da opção é obrigatório
    },
    shape: {
      type: DataTypes.ENUM('square', 'circle'),
      defaultValue: 'square',  // Valor padrão é "square"
      allowNull: true,   // Preenchimento opcional
    },
    radius: {
      type: DataTypes.INTEGER,
      defaultValue: 0,  // Valor padrão é 0
      allowNull: true,   // Preenchimento opcional
    },
    type: {
      type: DataTypes.ENUM('text', 'color'),
      defaultValue: 'text',  // Valor padrão é "text"
      allowNull: true,   // Preenchimento opcional
    },
    values: {
      type: DataTypes.STRING,
      allowNull: false,  // Valores da opção são obrigatórios
    },
  },
  {
    sequelize: connection,  // Passa a conexão com o banco de dados
    tableName: 'opcaoproduto', // Nome da tabela no banco de dados
    timestamps: false,  // Se não quiser as colunas createdAt e updatedAt
  }
);

module.exports = OpcaoProdutoModel;
