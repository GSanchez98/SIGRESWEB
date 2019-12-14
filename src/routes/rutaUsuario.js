//const express = require('express')
//const users = express.Router()

const express = require('express');
const router = express.Router();

//Importando rutas.
const usuarios = require('../controllers/usuarioController')

router.post('/login',usuarios.login);

module.exports = router