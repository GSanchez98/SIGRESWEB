const express = require('express');
const router = express.Router();

//Importando rutas.
const areaController = require('../controllers/areaController')

//Todas las funciones de crear y editar un area se generan 
// desde un computador principal.
//Para poder listar las areas actuales dentro del restaurante
router.get('/list',areaController.list );


module.exports = router;