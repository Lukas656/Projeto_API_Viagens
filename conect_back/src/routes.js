const express = require('express');
const cors = require('cors');
//controllers 
const userControll = require('../controllers/usersController.js');
const bodyParser = require('body-parser');

const router = express();
router.use(bodyParser.json());
router.use(cors());

// Exibe mensagem se esta funcionando a conexao
router.get('/', async (req, res) => res.status(200).send({ success: true, message: 'System Operating!' }));

// cadastro de um usuário
router.post('/create', userControll.createUser);

// Login
router.post('/login', userControll.authentication);

module.exports = router;