const { request } = require('express');
const UsuarioModel = require('../models/UsuarioModel');
const MD5 = require('crypto-js/md5')
class UsuarioController {
    async listar(request, response) {
        let dados = await UsuarioModel.findAll()
        return response.json(dados);
    }
    
    async consultarPorId(request, response) {
        try {
            const usuario = await UsuarioModel.findByPk(request.params.id);  // Acessando o ID via `params`

            if (!usuario) {
                return response.status(404).json({ message: 'usuario nao encontrada!' });
            }

            return response.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao consultar usuario",
                error: error.message
            });
        }
    }
    
    async criar(request, response) {
        try {
            const body = request.body;
            const password = MD5(body.password).toString();
            // criptografia da senha do susuario
            body.password = password;
            console.log(body)
            // teste
            await UsuarioModel.create(body)
            return response.status(201).json(body);
            
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao cadastrar usuario",
                error: error.message
            });
        }
        
    }

    async atualizar(request, response) {
        try {
            const id = request.params.id;
            const body = request.body;
            const usuario = await UsuarioModel.findByPk(id);  // Usando `params` para acessar o ID
    
            if (!usuario) {
                return response.status(404).json({ message: 'Usuario nao encontrada!' });
            }
    
            // Atualizar os dados da Usuario
            await UsuarioModel.update(body,{ where: {id}});
    
            return response.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao atualizar usuario",
                error: error.message
            });
        }
    }

    async deletar(request, response) {
        try {
            const usuario = await UsuarioModel.findByPk(request.params.id);  // Acessando o ID via `params`

            if (!usuario) {
                return response.status(404).json({ message: 'usuario nao encontrada!' });
            }
            return response.status(200).json(usuario);

        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao consultar usuario",
                error: error.message
            });
        }
        
        //return UsuarioModel.deletar();
    }
}

module.exports = UsuarioController;