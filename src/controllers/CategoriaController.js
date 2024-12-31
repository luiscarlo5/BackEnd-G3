const CategoriaModel = require('../models/CategoriaModel');
const ProdutoCategoriaModel = require('../models/ProdutoCategoriaModel');
const ProdutoModel = require('../models/ProdutoModel');

class CategoriaController {
    constructor(){
        //  ProdutoModel.associate();
        CategoriaModel.associate({ProdutoCategoriaModel, ProdutoModel});
    }
    async listar(request, response) {
        try {
            // Buscar Categorias com seus relacionamentos
            let dados = await CategoriaModel.findAll();

            // Retornar os dados no formato JSON
            return response.status(200).json(dados);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao listar categorias",
                error: error.message
            });
        }
    }
    async consultarPorId(request, response) {
        try {
            
            let id = request.params.id;
            if (!(await CategoriaModel.findByPk(id))) {
                return response.status(404).json({ message: 'Produto não encontrada!' });
            }
            let post = await CategoriaModel.findByPk(id,{
                attributes: ['enable', 'name', 'slug', 'use_in_menu', 'stock', 'description', 'price', 'price_with_discount']
            })
            return response.status(200).json(post);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao consultar produto",
                error: error.message
            });
        }
        
        //return CategoriaModel.consultarPorId();

    }
    
    async criar(request, response) {
        try {
            let body = request.body;
            console.log(body)
            // teste
            await CategoriaModel.create(body, {
                include: ProdutoCategoriaModel,
                as: 'produto_categoria'
            })
            return response.status(201).json(body);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao criar categoria",
                error: error.message
            });
        }
        
        //return ProdutoModel.criar();
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id;
            const body = request.body;
            const categoria = await CategoriaModel.findByPk(id);  // Usando `params` para acessar o ID
    
            if (!categoria) {
                return response.status(404).json({ message: 'categoria nao encontrado!' });
            }
    
            // Atualizar os dados da Categoria
            await CategoriaModel.update(body,{ 
                where: {id},
                include: ProdutoCategoriaModel,
                as: 'produto_categoria'
            });
    
            return response.status(200).json(imagem);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao atualizar categoria",
                error: error.message
            });
        }
        //return CategoriaModel.atualizar();
    }

    async deletar(request, response) {
        try {
            const id =request.params.id; 
            const categoria = await CategoriaModel.findByPk(id);  // Usando `params` para acessar o ID
    
            if (!categoria) {
                return response.status(404).json({ message: 'Categoria nao encontrada!' });
            }
    
            await CategoriaModel.destroy({
                where: {id}
            });
    
            return response.status(200).json({ message: 'Categoria deletada com sucesso!' });
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao deletar categoria",
                error: error.message
            });
        }
        //return CategoriaModel.deletar();
    }
}

module.exports = CategoriaController;