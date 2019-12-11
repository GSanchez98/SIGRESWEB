const controller = {}

var Mesas = require('../model/Mesa');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()

//Para poder obtener los datos de la mesa seleccionada
controller.get = async (req, res) => {
  const { id } = req.params;
  const data = await Mesas.findAll({
    where: { idregistro: id}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  })
  res.json({success:true, data:data});
}

//Para poder obtener las mesas asignadas a un area determinada
controller.getcodigoid = async (req, res) => {
  const { id } = req.params;
  const data = await Mesas.findAll({
    where: { CodigoArea: id}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  })
  res.json({success:true, data:data});
}

//Para generar el listado de las areas dentro del restaurante.
controller.list = async (req, res) => {

  // parametro post
  const { id } = req.body;

  const data = await Mesas.findAll({
    where: { CodigoArea: id }
  })
  .then(function(data){
    return data;
  })
  .catch(error => {
    return error;
  }); 

  res.json({success : true, data : data});

}

controller.list = async ( req, res) => {

  const data = await Mesas.findAll();
  res.json(data)

}


module.exports = controller;