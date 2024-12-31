const ProdutoModel = require('../models/ProdutoModel');
const ImagemProdutoModel = require('../models/ImagemModel')
const OpcaoProdutoModel = require('../models/OpcaoProdutoModel');
const ProdutoCategoriaModel = require('../models/ProdutoCategoriaModel');
const CategoriaModel = require('../models/CategoriaModel');

class ProdutoController {
    constructor(){
        ProdutoModel.associate({
            OpcaoProdutoModel, ProdutoCategoriaModel,CategoriaModel, ImagemProdutoModel
        });
    }
    async listar(request, response) {
        try {
            // Buscar produtos com seus relacionamentos
            let dados = await ProdutoModel.findAll({
                include: [
                    {
                        model: ProdutoCategoriaModel,
                        attributes: ['category_id'], 
                    },
                    {
                        model: ImagemModel,
                        attributes: ['enabled', 'path'], 
                    },
                    {
                        model: OpcaoProdutoModel,
                        attributes: ['tittle', 'shape',  'radius', 'type', 'values'], 
                        
                    }
                ]
            });

            // Retornar os dados no formato JSON
            return response.status(200).json(dados);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao listar produtos",
                error: error.message
            });
        }
    }
    async consultarPorId(request, response) {
        try {
            
            let id = request.params.id;
            if (!(await ProdutoModel.findByPk(id))) {
                return response.status(404).json({ message: 'Produto não encontrada!' });
            }
            let post = await ProdutoModel.findByPk(id,{
                attributes: ['enable', 'name', 'slug', 'use_in_menu', 'stock', 'description', 'price', 'price_with_discount'],
                include: [
                    {
                        model: ProdutoCategoriaModel,
                        attributes: ['category_id'], 
                    },
                    {
                        model: ImagemModel,
                        attributes: ['enabled', 'path'], 
                    },
                    {
                        model: OpcaoProdutoModel,
                        attributes: ['tittle', 'shape',  'radius', 'type', 'values'],   
                    }
                ]
            })
            return response.status(200).json(post);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao consultar produto",
                error: error.message
            });
        }
        
        //return ProdutoModel.consultarPorId();

    }
    
    async criar(request, response) {
       
        response.json({});
        try {
            let body = request.body;
            console.log(body)
            // teste
            await ProdutoModel.create(body, {
                include:[
                {
                    model: ProdutoCategoriaModel,
                    as: 'produto_categoria'
                },{
                    model: ImagemModel,
                    as: 'imagem_produto'
                },{
                    model: OpcaoProdutoModel,
                    as: 'opcao_produto'
                }]
            })
            return response.status(201).json(body);

        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao criar produto",
                error: error.message
            });
            
        }
        //return ProdutoModel.criar();
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id;
            const body = request.body;
            const produto = await ProdutoModel.findByPk(id);  // Usando `params` para acessar o ID
    
            if (!produto) {
                return response.status(404).json({ message: 'produto nao encontrado!' });
            }
    
            // Atualizar os dados da produto
            await ProdutoModel.update(body,{ 
                where: {id},
                include:[
                    {
                        model: ProdutoCategoriaModel,
                        as: 'produto_categoria'
                    },
                    {
                        model: ImagemModel,
                        as: 'imagem_produto'
                    },
                    {
                        model: OpcaoProdutoModel,
                        as: 'opcao_produto'
                    }
                ]
            });
    
            return response.status(200).json(imagem);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao atualizar produto",
                error: error.message
            });
        }
        //return ProdutoModel.atualizar();
    }

    async deletar(request, response) {
        try {
            const id =request.params.id; 
            const produto = await ProdutoModel.findByPk(id);  // Usando `params` para acessar o ID
    
            if (!produto) {
                return response.status(404).json({ message: 'produto nao encontrada!' });
            }
    
            await ProdutoModel.destroy({
                where: {id}
            });
    
            return response.status(200).json({ message: 'produto deletada com sucesso!' });
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao deletar produto",
                error: error.message
            });
        }
        //return ProdutoModel.deletar();
    }
}

module.exports = ProdutoController;