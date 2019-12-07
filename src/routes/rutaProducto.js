const express = require('express');
const router = express.Router();

//Importando rutas.
const productoController = require('../controllers/productoController')

//Para poder listar las areas actuales dentro del restaurante
//Las areas se controlan dentro de las maquinas principales.

router.get('/list/:id',productoController.getTproducto);


module.exports = router;