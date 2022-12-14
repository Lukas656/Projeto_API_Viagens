const { MongoClient, ObjectID } = require('mongodb');
const { useSearchParams } = require('react-router-dom');



// funçao que percorre o banco e checa se o login e senha existem e exibe mensagem
async function getLogin() {
    // conexão com o banco de dados
    const uri = "mongodb://localhost:27017";
    const voo = new MongoClient(uri);
    await voo.connect();
    const db = voo.db("primeiroDB");
    return db.collection("Login");
};

/* Exibe todos os os logins do banco*/
async function getAllLogin() {
    const conectionDb = await getLogin();
    const logins = await conectionDb.find().toArray();
    return logins
}

/* Criar um novo usuario*/
async function criarUser(newUser) {
    const conectionDb = await getLogin();
    novoUsuario = "Nao foi possivel Criar este usuario"
    
if(newUser.Usuario === "" && newUser.Login === "" && newUser.Senha === ""){
    novoUsuario = "Nao foi possivel Criar este usuario Ainda falta campos para preencher"
}if(newUser.Usuario === "" || newUser.Login === "" || newUser.Senha === ""){
    novoUsuario = "Nao foi possivel Criar este usuario Ainda falta campos para preencher"
}
else{
    console.log(newUser);
    novoUsuario = await conectionDb.insertOne(newUser);
}
    return novoUsuario;
}

/* Verifica Se o Usuário existe no banco de dados Login*/
async function autentica(buscaLogin, buscarSenha) {
    const logins = await getAllLogin();
    let msg = 'Usuário não Encontrado, verifique se os dados estão corretos!!'
    logins.forEach(login => {
        if (login.Login == buscaLogin && login.Senha == buscarSenha) {
            msg = login.Usuario ;
        }
    });
    return msg    
};
/* Verifica Se o Usuário existe no banco de dados Login*/
async function getLoginByNome(user) {
    user = msg
console.log(user)

    return user
}

// apaga tudo
async function deletaUsers() {
    const conectionDb = await getLogin();
    const cursos = conectionDb.deleteMany()
    return cursos;
}



const funcLogin = {
    getAllLogin,
    getLoginByNome,
    criarUser,
    autentica,
    deletaUsers
}

module.exports = funcLogin;