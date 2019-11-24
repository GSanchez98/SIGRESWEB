const express = require('express');
const router = express.Router();

//Importando rutas.
const clienteController = require('../controllers/customerController')

router.get('/testdata',clienteController.testdata );
router.get('/list',clienteController.list );


router.get('/test',clienteController.test);

router.get('/save', (req, res) => {

  res.json({status: 'Se ha almacenado con éxito'});

});

module.exports = router;