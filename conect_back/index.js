const express = require('express');
const cors = require('cors');
const funcLogin = require("./dbfuncs");
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

// Exibe mensagem se esta funcionando a conexao
app.get('/', async (req, res) => {
    res.status(200).send({ success: true, message: "Sistema Funcionando!!!" })
});

//  Pegar os Dados
app.get('/login', async (req, res) => {
    let logins = await funcLogin.getAllLogin();
    console.log(logins)
    res.status(200).send(logins)
});

// retorna usuario pelo id e exibe o email
app.get('/user/:id', async(req, res)=>{
    let user = await funcLogin.getLoginByID(req.params.id);
    res.status(200).send({success: true, user})
})

// verifica se o usuario e senha existem
app.get('/user', async(req, res)=>{
    let userLogin = req.body
    console.log(userLogin);
    let user = await funcLogin.autentica(userLogin.Usuario, userLogin.Senha);
    console.log(user)
    res.status(200).send({success: true, user})
})







app.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
});