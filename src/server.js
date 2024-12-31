const express = require("express");
const RotasPublicas = require('../src/routes/Rotas');
const MiddlewareRotas = require('../src/middleware/RotasPrivadas');
//const MiddlewareRotas = require("./middleware/RotasPrivadas");

const host = "localhost";
const port = 3000;

const app =  express();
app.use(express.json())

app.get('/', (request, response) => {
    const {url, method} = request;
    console.log(url, method)

    if(url === '/'){
        response.writeHead(200, {'Content-type': 'text/plain'});
        return response.end("Ola NodeJS, Servidor OK");
    }       
    if(!rotas[url] &&  !rotas[url][method]){
        response.writeHead(404, {'Content-type': 'text/plain'});
        return response.end("Página nã encontrada - Not Found ");
    }

   
    response.writeHead(200, {'Content-type': 'application/json'});
    return response.end("Bem vindo ao Projeto Back End");
    //return response.end(JSON.stringify(dados));

});

app.use(RotasPublicas);
app.use(MiddlewareRotas);

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`);
} )