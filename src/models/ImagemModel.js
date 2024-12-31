const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connections'); // Conexão com o banco de dados
const ProdutoModel = require('../models/ProdutoModel');

class ImagemProdutoModel extends Model {
  static associate({ProdutoModel}){
    ProdutoModel.hasMany(ImagemProdutoModel, { 
      foreignKey: 'product_id',
    });
    ImagemProdutoModel.belongsTo(ProdutoModel, { 
      foreignKey: "product_id",
    });

  }

}

ImagemProdutoModel.init(
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
      onDelete: 'CASCADE',  // Apaga as imagens associadas ao produto quando ele for excluído
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,  // Valor padrão: 0 (desabilitado)
      allowNull: true,   // Preenchimento opcional
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,  // Caminho da imagem é obrigatório
    }
  },
  {
    sequelize: connection,  // Passa a conexão com o banco de dados
    tableName: 'imagemproduto', // Nome da tabela no banco de dados
    timestamps: false,  // Se não quiser as colunas createdAt e updatedAt
  }
);

// Definindo o relacionamento entre Produto e ImagemProdutoModel
// ProdutoModel.hasMany(ImagemProdutoModel, { foreignKey: 'product_id' });
// ImagemProdutoModel.belongsTo(ProdutoModel, { foreignKey: 'product_id' });

module.exports = ImagemProdutoModel;
