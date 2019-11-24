const express = require('express');
const router = express.Router();

//Importando rutas.
const employeeController = require('../controllers/customerController')
router.get('/test',employeeController.test);

router.get('/save', (req, res) => {

  res.json({status: 'Se ha almacenado con éxito'});

});

module.exports = router;