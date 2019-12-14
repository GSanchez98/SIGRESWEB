const express = require('express');
const router = express.Router();

//Importando rutas.
const pedidoController = require('../controllers/pedidoController')

//Ruta para crear un nuevo pedido
router.post('/crear',pedidoController.crear);

//Ruta para listar los pedidos pendientes
router.get('/list',pedidoController.list);

// Ruta para poder eliminar los registros cuando se desea 
// liberar una mesa.
router.post('/delete/:id',pedidoController.delete);

module.exports = router;