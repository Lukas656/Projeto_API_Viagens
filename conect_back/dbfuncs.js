const { MongoClient, ObjectID } = require('mongodb');


async function getLogin() {
    // conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const voo = new MongoClient(uri);
    await voo.connect();
    const db = voo.db("primeiroDB");
    return db.collection("Login");
};
// funçao que percorre o banco e checa se o login e senha existem e exibe mensagem
async function getLogin() {
    // conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const voo = new MongoClient(uri);
    await voo.connect();
    const db = voo.db("primeiroDB");
    return db.collection("Login");
};


async function getAllLogin() {
    const conectionDb = await getLogin();
    const logins = await conectionDb.find().toArray();
    return logins
}
async function getLoginByID(id) {
    const conectionDb = await getLogin();
    const login = await conectionDb.findOne({ _id: ObjectID(id)});
    return login;
}


async function autentica(login, senha) {
    const conectionDb = await getLogin();
    login = getAllLogin()
    console.log(login.Usuario);
}


const funcLogin = {
    getAllLogin,
    getLoginByID,
    autentica
}

module.exports = funcLogin;