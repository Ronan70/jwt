const express = require('express');
const rotas = require('./routes');

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(7070, () =>{
    console.log('Rodando na porta 7070');
})