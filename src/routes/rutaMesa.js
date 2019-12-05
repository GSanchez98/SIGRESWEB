const express = require('express');
const router = express.Router();

//Importando rutas.
const mesas_x_area = require('../controllers/mesaController')

//Para poder listar las areas actuales dentro del restaurante
//Las areas se controlan dentro de las maquinas principales.

router.get('/list',mesas_x_area.list );
router.get('/list/:id',mesas_x_area.getcodigoid);

module.exports = router;