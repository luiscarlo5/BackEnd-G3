# Projeto Backend - Node.js

Este repositório contém o desenvolvimento de um **projeto backend** em **Node.js** baseado no [descritivo oficial](https://github.com/digitalcollegebr/projeto-backend).  
O objetivo é atender aos requisitos funcionais, de qualidade de código, banco de dados e boas práticas de desenvolvimento.

Com este projeto eu fui capaz de criar um sistema Back End em Node.js que tenha segurança, arquitetura padrão MVC e funcionalidade com Banco de Dados SQL. Esse projeto pode e deve servir como base para projetos futuros profissionais e pessoais.

Neste projeto, implementei uma API RESTful utilizando Node.js com Express.js, estruturada de forma modular para facilitar a manutenção e escalabilidade. Configurei o ambiente com dotenv para gerenciamento seguro de variáveis de configuração e usei Nodemon para otimizar o fluxo de desenvolvimento.

A persistência de dados foi feita com MySQL, e utilizei o Sequelize como ORM para manipular o banco de dados de forma mais produtiva. Criei tabelas para usuários, categorias, produtos, imagens de produtos, opções de produtos e a relação produtos-categorias, garantindo integridade e relacionamentos adequados.

Os endpoints seguem os padrões REST, retornando os códigos HTTP corretos, como 200 OK, 201 CREATED, 204 No Content, 400 Bad Request, 401 Unauthorized e 404 Not Found, garantindo respostas consistentes para cada situação. Implementei CRUD completo para usuários, categorias e produtos, incluindo criação, leitura, atualização e exclusão de registros.

---

## Tecnologias Utilizadas

- **Node.js** com **Express.js**
- **JWT (jsonwebtoken)** para autenticação e autorização
- **crypto-js** para criptografia de dados sensíveis
- **Banco de Dados**: MySQL, SQL.
- **ORM / Query Builder**: Sequelize.
- **Git** para versionamento

---

## Estrutura de Pastas

```bash
projeto-backend/
│── src/
│   ├── config/        # Configurações gerais para conectar-se ao banco de dados
│   ├── controllers/   # Lógica de cada recurso/endpoint
│   ├── middlewares/   # Middlewares para autenticação com JWT
│   ├── models/        # Modelos do banco de dados
│   ├── routes/        # Definição de rotas da API
│   ├── services/      # Funções auxiliares de criptografia, autenticação e sincronização.
│   └── app.js         # Configuração principal do Express
│
│── package.json
│── README.md
```

### Passos para utilizar repositório
```bash
# Clone este repositório
git clone https://github.com/luiscarlo5/BackEnd-G3.git

# Acesse a pasta do projeto
cd BackEnd-G3

# Instale as dependências
npm install

# Execute em ambiente de desenvolvimento Node.JS
npm start

# Acesse pelo navegador
http://localhost:3000

