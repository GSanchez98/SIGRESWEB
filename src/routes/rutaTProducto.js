const express = require('express');
const router = express.Router();

// Importando rutas.
const TproductoController = require('../controllers/TproductoController')

// Para poder listar las categorías de productos.
router.get('/list',TproductoController.list );


module.exports = router;