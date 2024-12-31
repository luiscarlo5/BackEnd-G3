const express = require('express');
const jwt = require('jsonwebtoken')
const MiddlewareRotas = express.Router();

const {UsuariosRotasPrivadas} = require('../routes/usuariosr')
const {ProdutoRotasPrivadas} = require('../routes/produtosr')
const {CategoriasRotasPrivadas} = require('../routes/categoriasr')


MiddlewareRotas.use((request, response, next) => {
    const token = request.headers.token;
    try {
        jwt.verify(token, process.env.APP_KEY_TOKEN)
    } catch (JsonWebTokenError) {
        return response.status(400).end("Bad Request - Nao Autorizado")
    }
    next();
});

MiddlewareRotas.use(UsuariosRotasPrivadas);
MiddlewareRotas.use(ProdutoRotasPrivadas);
MiddlewareRotas.use(CategoriasRotasPrivadas);

module.exports = MiddlewareRotas;