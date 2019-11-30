const express = require('express');
const router = express.Router();

//Importando rutas.
const clienteController = require('../controllers/customerController')

// router.get('/testdata',clienteController.testdata );

router.get('/list',clienteController.list );

//Ruta para crear un nuevo cliente.
router.post('/crear',clienteController.crear);

router.get('/get/:id',clienteController.get);


router.get('/test',clienteController.test);
router.post('/update/:id',clienteController.update);

//router.post('/delete',clienteController.delete);


// router.get('/save', (req, res) => {

//   res.json({status: 'Se ha almacenado con éxito'});

// });

module.exports = router;