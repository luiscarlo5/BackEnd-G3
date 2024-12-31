const { Model, DataTypes } = require('sequelize');
const connection = require('../config/connections');

class ProdutoModel extends Model {
    static associate({OpcaoProdutoModel,ProdutoCategoriaModel,CategoriaModel,ImagemProdutoModel}){

        console.log("Olha o gustavo lima")
        ProdutoModel.hasMany(OpcaoProdutoModel, { 
            foreignKey: 'product_id',
        });
        OpcaoProdutoModel.belongsTo(ProdutoModel, { 
            foreignKey: 'product_id',
        });


        ProdutoModel.hasMany(ImagemProdutoModel, { 
          foreignKey: 'product_id',
        });
        ImagemProdutoModel.belongsTo(ProdutoModel, { 
            foreignKey: 'product_id',
        });


        ProdutoModel.hasMany(ProdutoCategoriaModel, { 
            foreignKey: 'product_id',
        });
        ProdutoCategoriaModel.belongsTo(ProdutoModel, { 
            foreignKey: 'product_id',
        });

        CategoriaModel.belongsToMany(ProdutoModel, {
            through: ProdutoCategoriaModel, // Nome da tabela intermediária
            foreignKey: 'product_id',     // Chave estrangeira para o modelo Produto
            otherKey: 'category_id',     // Chave estrangeira para o modelo Categoria
        });
        
    }
};

ProdutoModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,  // A chave primária será incrementada automaticamente
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,  // Valor padrão 0 (desabilitado)
            allowNull: true,   // Preenchimento opcional
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,  // Preenchimento obrigatório
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,  // Preenchimento obrigatório
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,  // Valor padrão 0 (não exibido no menu)
            allowNull: true,   // Preenchimento opcional
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,  // Valor padrão 0 (sem estoque)
            allowNull: true,   // Preenchimento opcional
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,   // Preenchimento opcional
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,  // Preenchimento obrigatório
        },
        price_with_discount: {
            type: DataTypes.FLOAT,
            allowNull: false,  // Preenchimento obrigatório
        }
    },
    {
        timestamps: false,
        sequelize: connection, 
        tableName: 'produtos_'
    }
);
module.exports = ProdutoModel;
