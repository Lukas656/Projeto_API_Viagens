require('dotenv').config();
const repository = require('../repository/index.js');
// Obtendo dados do banco pelo arquivo .env
const COLLETION_USUARIO = process.env.COLLETION_USUARIO;

// create
// Aqui eu estou pegando os dados do meu usuario para inseri-lo no banco de dados 
/*porem um detalhe é que após obter os dados que são pessoais do usuario 
eu crio dois arrays de objetos que virão como padrão vazios, mais a frente quando este 
usuario for cacpaz de agendar e ver histórico de suas viagens estes cacmpos serão alimentados.*/
async function create(newUser) {
	const result = await repository.findByFilter(COLLETION_USUARIO, { email: newUser.email });
	if (!result) {		
        newUser.historico_viagens = [{"dia": null, "lugar": null, "valor": null},]
        newUser.nova_viagem = [{"dia": null, "lugar": null, "valor": null},]
		await repository.insertOne(COLLETION_USUARIO, newUser);
	
		return newUser;
	}
	return false;
}
// Login
// Aqui Fqaço uma consulta no banco de dados filtrando o Email e Senha passado pelo usuario
async function login(data) {
	let result = await repository.findByFilter(COLLETION_USUARIO, { email: data.email });
	if (!result )return false
	const checkPass = await repository.findByFilter(COLLETION_USUARIO, { senha: data.senha });
	if(!checkPass) return false
	
	return result;
}

// new trip = Nova Viagem
async function newTrip(validacao){
	const checkPass = await repository.findByFilter(COLLETION_USUARIO, { senha: validacao.senha });
	if(!checkPass) return false
	
	return validacao;
}

const usuarioController = {
	create,
    login,
	newTrip,
	
};

module.exports = usuarioController;