const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connections');
class CategoriaModel extends Model {
    static associate({ProdutoCategoriaModel, ProdutoModel}){
        console.log("Olha o neymar")

 // Categoria pertence a muitos Produtos por meio da tabela intermediária ProdutoCategoria
        CategoriaModel.belongsToMany(ProdutoModel, {
            through: ProdutoCategoriaModel, // Nome do modelo da tabela intermediária
            foreignKey: 'category_id',     // Chave estrangeira em ProdutoCategoria apontando para Categoria
            otherKey: 'product_id',        // Chave estrangeira em ProdutoCategoria apontando para Produto
            as: 'produtos',                // Nome do alias para esta associação
        });

        // Produto também pertence a muitos Categorias por meio da tabela intermediária ProdutoCategoria
        ProdutoModel.belongsToMany(CategoriaModel, {
            through: ProdutoCategoriaModel, // Nome do modelo da tabela intermediária
            foreignKey: 'product_id',       // Chave estrangeira em ProdutoCategoria apontando para Produto
            otherKey: 'category_id',        // Chave estrangeira em ProdutoCategoria apontando para Categoria
            as: 'categorias',               // Nome do alias para esta associação
        });
    }
};

// Definindo o modelo para a tabela
CategoriaModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, // O id será auto-incrementado
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0, 
            allowNull: true    
        } 
    },
  {
    timestamps: false,
    sequelize: connection, 
    tableName: "categoria_"
  }
);

module.exports = CategoriaModel;