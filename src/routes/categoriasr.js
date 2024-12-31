const express = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const CategoriasRotas = express.Router();
const CategoriasRotasPrivadas = express.Router();

const categoriasController = new CategoriaController();

CategoriasRotas.get('/category', categoriasController.listar);
CategoriasRotas.get('/category/:id', categoriasController.consultarPorId);

CategoriasRotasPrivadas.post('/category', categoriasController.criar);
CategoriasRotasPrivadas.put('/category', categoriasController.atualizar);
CategoriasRotasPrivadas.delete('/category/:id', categoriasController.deletar);

module.exports = {CategoriasRotas, CategoriasRotasPrivadas};
