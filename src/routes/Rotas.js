const express = require('express');
const jwt = require('jsonwebtoken');
const AuthController = require('../controllers/AuthController');
const RotasPublicas = express.Router();

const {UsuariosRotas} = require('../routes/usuariosr')
const {ProdutoRotas} = require('../routes/produtosr')
const {CategoriasRotas} = require('../routes/categoriasr')

RotasPublicas.post('./login', async (request, response) => {
    const body = request.body;
    const auth = new AuthController();
    const dados = await auth.login(body.email, body.password);

    if(dados){
        const token = jwt.sign(dados, process.env.APP_KEY_TOHEN)
        return response.json({
            token: token
        })
    }
    return response.status(401).end("Email ou Senha incorreto")
});

RotasPublicas.use(UsuariosRotas);
RotasPublicas.use(ProdutoRotas);
RotasPublicas.use(CategoriasRotas);

module.exports = RotasPublicas;