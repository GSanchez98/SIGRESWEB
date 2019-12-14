const express = require('express');
const router = express.Router();

//Importando rutas.
const detalleController = require('../controllers/detalleController')

//Ruta para generar un nuevo detalle de una compra/pedido.
router.post('/creardetalle',detalleController.creardetalle);

module.exports = router;