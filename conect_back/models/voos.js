require('dotenv').config();
const repository = require('../repository/index.js');
// Obtendo dados do banco pelo arquivo .env
const COLLETION_VOOS = process.env.COLLETION_VOOS;

async function getTrip() {
	let result = await repository.allTrip(COLLETION_VOOS);
	if (!result) {
		return false
	}

	return result;
}


const usuarioController = {
	getTrip,
	
};

module.exports = usuarioController;