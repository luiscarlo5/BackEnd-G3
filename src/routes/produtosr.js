const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const ProdutoRotas = express.Router();
const ProdutoRotasPrivadas = express.Router();

const produtosController = new ProdutoController();

ProdutoRotas.get('/products', produtosController.listar);
ProdutoRotas.get('/products/:id', produtosController.consultarPorId);

ProdutoRotasPrivadas.post('/products', produtosController.criar);
ProdutoRotasPrivadas.put('/products', produtosController.atualizar);
ProdutoRotasPrivadas.delete('/products/:id', produtosController.deletar);

module.exports = {ProdutoRotas, ProdutoRotasPrivadas};
