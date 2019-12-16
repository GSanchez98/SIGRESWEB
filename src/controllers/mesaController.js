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

//Para poder obtener el codigo de la mesa seleccionada
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

//Para generar el listado de las mesas en un área.
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

//Para poder actualizar el estado de las mesas.
controller.update = async (req, res) => {
  // parametro post
  const { id } = req.params;
  const { estado } = req.body;
  // actualizar dato
  const data = await Mesas.update({
    estado: estado,
  },{
    where: { idregistro: id}
  })
  .then( function (data){
    return data;
  })
  .catch(error => {
    return error;
  })

  res.json({ success:true, data: data, message: "EL ESTADO DE LA MESA HA SIDO MODIFICADO EXITOSAMENTE"});

}


module.exports = controller;