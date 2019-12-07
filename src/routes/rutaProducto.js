const express = require('express');
const router = express.Router();

// Importando rutas.
const productoController = require('../controllers/productoController')

// Para poder listar los productos de una categoria en específico.
router.get('/list',productoController.list );
router.get('/list/:id',productoController.getTproducto);


module.exports = router;