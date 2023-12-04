require('dotenv').config();
const repository = require('../repository/index.js');

const COLLETION_USUARIO = process.env.COLLETION_USUARIO;

// create
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
async function login(data) {
	let result = await repository.findByFilter(COLLETION_USUARIO, { email: data.email });
	if (!result ) {
        return false;
	}
	// await repository.updateOne(COLLETION_USUARIO, { id: result.id }, { $set: { token: newToken, ultimo_login: date } });
	return "Tudo Certo!";

}

const usuarioController = {
	create,
    login,
	
};

module.exports = usuarioController;