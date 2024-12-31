const UsuarioModel = require("../models/UsuarioModel");

class AutenticacaoController {
    login(email, password){
        const dados = UsuarioModel.autenticar(email, password);
        return dados;
    }
}

module.exports = AutenticacaoController;