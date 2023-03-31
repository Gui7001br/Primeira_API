const express = require("express");
const api = express();
require("dotenv").config();
const porta = process.env.PORTA_API;
const enderecoBanco = process.env.URL_BD;

const mongoose = require("mongoose");

mongoose.connect(enderecoBanco);

mongoose.connection.on("connected", () => {
    console.log("[AVISO]: Aplicação conectada ao BD!");
});

mongoose.connection.on("disconnected", () => {
    console.log("[AVISO]: Aplicação desconectada do BD!");
});

mongoose.connection.on("error", (erro) => {
    console.log("[AVISO]: Erro ao conectar ao BD!");
    console.log(erro);
});
api.listen(porta, () => {
    console.log("API rodando na porta " + porta);
});

api.get("/status", (req, res) => {
    res.send({ mensagem: "API online!"});
});

//npm i dotenv