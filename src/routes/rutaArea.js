const express = require('express');
const router = express.Router();

//Importando rutas.
const areaController = require('../controllers/areaController')

//Para poder listar las areas actuales dentro del restaurante
//Las areas se controlan dentro de las maquinas principales.

router.get('/list',areaController.list );


module.exports = router;