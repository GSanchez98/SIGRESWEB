const express = require('express');
const router = express.Router();

//Importando rutas.
const pedidoController = require('../controllers/pedidoController')

//Ruta para crear un nuevo pedido
router.post('/crear',pedidoController.crear);

router.get('/list',pedidoController.list);

router.post('/delete/:id',pedidoController.delete);

module.exports = router;