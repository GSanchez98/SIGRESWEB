const express = require('express');
const router = express.Router();

//Importando rutas.
const TproductoController = require('../controllers/TproductoController')

//Para poder listar las areas actuales dentro del restaurante
//Las areas se controlan dentro de las maquinas principales.

router.get('/list',TproductoController.list );


module.exports = router;