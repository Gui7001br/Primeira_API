const express = require('express');
const api = express();
require('dotenv').config();
const porta = process.env.PORTA;

const mongoose = require('mongoose');
const enderecoBanco = process.env.URL_BD;
console.log(enderecoBanco);
mongoose.connect(enderecoBanco);

mongoose.connection.on('error', function(erro) {
    console.log('Erro na conexão com o BD ' + erro);
});

mongoose.connection.on('disconnected', function() {
    console.log('Aplicação desconectada do BD');
});

mongoose.connection.on('connected', function() {
    console.log('Aplicação conectada ao BD');
});

api.listen(porta, function () {
    console.log('Aplicação rodando na porta ' + porta);
});

// localhost:3000 OU IP_API:3000
api.get('/status', (req, res) => {
    res.send({ mensagem: 'API online' });
});

const produtosController = require('./controller/produtos');
api.get('/produtos', produtosController.ListarProdutos);
api.post('/produtos', produtosController.adicionarProduto);
api.delete('/produto', produtosController.removerProduto)