const controller = {}

var Area = require('../model/Area');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()


//Para generar el listado de las areas dentro del restaurante.
controller.list = async (req, res) => {

  const data = await Area.findAll()
  .then(function(data){
    return data;
  })
  .catch(error => {
    return error;
  }); 

  res.json({success : true, data : data});

}

controller.list = async ( req, res) => {

  const data = await Area.findAll();
  res.json(data)

}

module.exports = controller;