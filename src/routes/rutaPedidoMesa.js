const express = require('express');
const router = express.Router();

//Importando rutas.
const pedidosmesaController = require('../controllers/pedidosmesaController')

//Ruta para crear un nuevo cliente.
router.post('/crear',pedidosmesaController.crear);

module.exports = router;