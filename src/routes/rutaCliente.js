const express = require('express');
const router = express.Router();

//Importando rutas.
const clienteController = require('../controllers/customerController')

// router.get('/testdata',clienteController.testdata );

router.get('/list',clienteController.list );

//Ruta para crear un nuevo cliente.
router.post('/crear',clienteController.crear);

//Ruta para obtener un cliente.
router.get('/get/:id',clienteController.get);

//Ruta para el control de la conexión.
router.get('/test',clienteController.test);

//Ruta para actualizar un cliente.
router.post('/update/:id',clienteController.update);

//Ruta para eliminar un cliente.
router.post('/delete',clienteController.delete);

module.exports = router;