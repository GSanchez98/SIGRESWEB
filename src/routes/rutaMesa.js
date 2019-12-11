const express = require('express');
const router = express.Router();

// Importando rutas.
const mesas_x_area = require('../controllers/mesaController')

// Para poder listar las mesas asignadas a un area en específico.
// La asignación de las mesas dentro de un area determinada se 
// hace directameente de la máquina principal.

router.get('/list',mesas_x_area.list );
router.get('/list/:id',mesas_x_area.getcodigoid);

//Ruta para obtener un cliente.
router.get('/get/:id',mesas_x_area.get);

router.post('/update/:id',mesas_x_area.update);



module.exports = router;