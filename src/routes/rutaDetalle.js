const express = require('express');
const router = express.Router();

//Importando rutas.
const detalleController = require('../controllers/detalleController')

//Ruta para crear un nuevo cliente.
router.post('/creardetalle',detalleController.creardetalle);

//router.get('/listdetalle/:id',detalleController.get);

module.exports = router;