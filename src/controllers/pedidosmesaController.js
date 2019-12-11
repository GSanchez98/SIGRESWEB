const controller = {}

var pedidosMesa = require('../model/pedidosMesa');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()


//Para manejar la creación de los clientes
controller.crear = async (req,res) => {

  // create
  var Moment = require('moment');
  console.log(Moment().format('YYYY-MM-DD HH:mm:ss'));
  const data = await pedidosMesa.create({
    idMesero: 1,
    fecha: Moment().format('YYYY-MM-DD HH:mm:ss'),
    Estacion: 2,
    activo: 0,
    Modalidad: 'ME',
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    console.log("Error : "+error)
    return error;
  })
  // return res
  res.status(200).json({
    success: true,
    message:"El pedido se ha almacenado con éxito.",
    data: data
  });
}

controller.list = async ( req, res) => {

  const data = await pedidosMesa.findAll();
  res.json(data)

}

module.exports = controller;