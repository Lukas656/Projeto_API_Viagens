const express = require('express');
const cors = require('cors');
const funcLogin = require("./dbfuncs");
const bodyParser = require('body-parser');
const app = express();

const port = 5000;
app.use(bodyParser.json())
app.use(cors())



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


// verifica se o usuario e senha existem
app.post('/user', async (req, res) => {
    let userLogin = req.body
    console.log(userLogin);
    let user = await funcLogin.autentica(userLogin.Login, userLogin.Senha);
    console.log(user)
    res.status(200).send({ success: true, user})
});


// Criar usuario
app.post('/newuser', async (req, res) => {
    let userLogin = req.body
    let user = await funcLogin.criarUser(userLogin);
    console.log(user)
    res.status(200).send({ success: true, user})
})


// Apagar tudo
app.delete('/deletmany', async (req, res) => {
    let users = await funcLogin.deletaUsers();
    res.status(200).send({ success: true, users })
})



app.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
});