const express = require('express');
const UsuariosController = require('../controllers/UsuarioController');

const UsuariosRotas = express.Router();
const UsuariosRotasPrivadas = express.Router();

const usuariosController = new UsuariosController();

UsuariosRotas.get('/users', usuariosController.listar);
UsuariosRotas.get('/users/:id', usuariosController.consultarPorId);


UsuariosRotasPrivadas.post('/users', usuariosController.criar);
UsuariosRotasPrivadas.put('/users', usuariosController.atualizar);
UsuariosRotasPrivadas.delete('/users', usuariosController.deletar);

module.exports = {UsuariosRotas, UsuariosRotasPrivadas};
