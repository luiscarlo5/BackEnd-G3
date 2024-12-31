const UsuarioModel = require("../models/UsuarioModel");
const MD5 = require('crypto-js/md5');

class AuthController {
    async login(email, password){
        const dados = await UsuarioModel.findAll({
            where: {
                email: email,
                password: MD5(password).toString()
            }
        })
    }
}

module.exports = AuthController;