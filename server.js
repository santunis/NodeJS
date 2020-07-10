const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir("./src/models");

const Product = mongoose.model("Product");

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: "Teste do teste",
        description: "Testando do teste",
        url: "teste@teste.com.br"
    });

    res.send("hello teste");
});

app.listen(3001);