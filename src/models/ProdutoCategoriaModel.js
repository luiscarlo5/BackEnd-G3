const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connections'); 
const ProdutoModel = require('../models/ProdutoModel');
const CategoriaModel = require('../models/CategoriaModel');

class ProdutoCategoriaModel extends Model {
  static associate({ProdutoModel, CategoriaModel}) {

    ProdutoModel.hasMany(ProdutoCategoriaModel, {
      foreignKey: 'product_id',
      as: 'parents'
    });
    ProdutoCategoriaModel.belongsTo(ProdutoModel, { 
      foreignKey: 'product_id',
      as: 'children'
    });
    
    CategoriaModel.hasMany(ProdutoCategoriaModel, {
      foreignKey: 'category_id',
      as: 'parents'

    });
    CategoriaModel.belongsTo(ProdutoCategoriaModel, {
      foreignKey: 'category_id',
      as: 'children'

    });
    
  }
}

ProdutoCategoriaModel.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,  // Chave estrangeira obrigatória
      references: {
        model: ProdutoModel,  // Referência ao modelo de produto
        key: 'id',            // Chave primária de ProdutoModel
      },
      onDelete: 'CASCADE',  // Apaga as opções se o produto for deletado
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,  // Chave estrangeira obrigatória
      references: {
        model: CategoriaModel,  // Referência ao modelo de categoria
        key: 'id',               // Chave primária de CategoriaModel
      },
      onDelete: 'CASCADE',  // Apaga as opções se a categoria for deletada
    },
  },
  {
    sequelize: connection,  // Passa a conexão com o banco de dados
    tableName: 'produtoscategoria',  // Nome da tabela no banco de dados
    timestamps: false,  // Se não quiser as colunas createdAt e updatedAt
  }
);

module.exports = ProdutoCategoriaModel;
