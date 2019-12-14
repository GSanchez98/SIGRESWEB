const express = require('express');
const router = express.Router();

//Importando rutas.
const pedidosmesa2Controller = require('../controllers/pedidosmesa2Controller')

//Ruta para controlara detalle los pedidos generados.
router.post('/crear',pedidosmesa2Controller.crear);

module.exports = router;