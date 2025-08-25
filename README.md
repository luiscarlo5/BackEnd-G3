# Projeto Backend - Node.js

Este repositório contém o desenvolvimento de um **projeto backend** em **Node.js** baseado no [descritivo oficial](https://github.com/digitalcollegebr/projeto-backend).  
O objetivo é atender aos requisitos funcionais, de qualidade de código, banco de dados e boas práticas de desenvolvimento.

Com este projeto eu fui capaz de criar um sistema Back End em Node.js que tenha segurança, arquitetura padrão MVC e funcionalidade com Banco de Dados SQL. Esse projeto pode e deve servir como base para projetos futuros profissionais e pessoais.

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
