require('dotenv').config();
const userModels = require('../models/user.js');


async function createUser(req, resp) {
	try {
		const data = req.body;
		let newData = await userModels.create(data);

		if (newData === false) {
			return resp.status(403).send({ 'menssagem': 'E-mail já Cadastrado!' });
		}
		
		resp.status(200).send(newData);


	} catch (error) {
		resp.status(500).send({
			error: 'Error',
			message: error.message
		});
	}
}
async function authentication(req, resp) {
	try {
		const data = req.body;
		let newData = await userModels.login(data);
		if (newData === false) {
			return resp.status(401).send({ 'menssagem': 'Usuário e/ou senha inválidos' });
		}
		resp.status(200).send(newData);


	} catch (error) {
		resp.status(500).send({
			error: 'Error',
			message: error.message
		});
	}
}

module.exports = { createUser, authentication};