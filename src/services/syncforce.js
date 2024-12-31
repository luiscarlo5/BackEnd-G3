const connection = require("../config/connections");

require('../models/UsuarioModel');

require('../models/ProdutoModel');

require('../models/CategoriaModel');

require('../models/ImagemModel');

require('../models/OpcaoProdutoModel');

require('../models/ProdutoCategoriaModel');

connection.sync({force: true});