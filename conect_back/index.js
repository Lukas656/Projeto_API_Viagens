const express = require('express');
const routers = require('./src/routes.js')
const port = 5000;

const app = express();

app.use(routers);


app.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
});