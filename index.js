const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//endpoint sencillo
app.get('/', (_req,res)=>{
    res.send('Integración continua funcionando!');
});

app.listen(PORT, ()=>{
    console.log(`Servidor ejecutando en el puerto ${PORT}`);
});