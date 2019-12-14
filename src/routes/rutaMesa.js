const express = require('express');
const router = express.Router();

// Importando rutas.
const mesas_x_area = require('../controllers/mesaController')

// para poder realizar el filtrado que posee un area
// en cuanto a su numero de mesas.
router.get('/list',mesas_x_area.list );
router.get('/list/:id',mesas_x_area.getcodigoid);

//Ruta para obtener un numero de mesa.
router.get('/get/:id',mesas_x_area.get);

//Ruta para poder actualizar el estado de la mesa.
router.post('/update/:id',mesas_x_area.update);

module.exports = router;