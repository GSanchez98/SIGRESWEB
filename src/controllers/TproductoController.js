const controller = {}

var Tproducto = require('../model/TipoProducto');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()


//Para generar el listado de las categorías establecidas.
controller.list = async (req, res) => {

  const data = await Tproducto.findAll()
  .then(function(data){
    return data;
  })
  .catch(error => {
    return error;
  }); 

  res.json({success : true, data : data});

}

controller.list = async ( req, res) => {

  const data = await Tproducto.findAll();
  res.json(data)

}


module.exports = controller;