const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const app = express();

const port = 5000;
app.use(bodyParser.json())
app.use(cors())

async function getLogin() {
    // conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const voo = new MongoClient(uri);
    await voo.connect();
    const db = voo.db("primeiroDB");
    return db.collection("Login");
};

//  Pegar os Dados
app.get('/login', async (req, res) => {
    const loginCollection = await getLogin();
    const logins = await loginCollection.find().toArray();
    console.log(logins)
    res.send(logins)
});





app.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
});