const express = require('express');

const app = express();

const PORT = process.env.PORT || 8081;

app.get('/', (req, res)=>{
    res.send('Hello, world!');
});

app.get('/teste', (req, res)=>{
    res.send('Aqui é uma página testeeeeeeeeeeeeeeeeeeeeeeeeeeee');
});


app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`);
});
