const controller = {}

var pedidosMesa2 = require('../model/pedidosMesa2');
var pedidosMesa = require('../model/pedidosMesa');
var sequelize = require('../model/mysql');
var Moment = require('moment');

//para migrar por si no se tienen las tablas
sequelize.sync()


//Para manejar la creación de los detalles especificos de un pedido
controller.crear = async (req,res) => {
// data parametros enviados desde POST
const {idmesa, nombrecuenta} = req.body;

console.log(req.body);

//Se obtiene el número de pedido.
const data1 = await pedidosMesa.findOne({
  attributes: ['NumeroPedido'],
  limit: 1,
  order: [
    ['NumeroPedido', 'DESC']
]
})
console.log (data1.NumeroPedido)

// create
const data = await pedidosMesa2.create({
  idpedido: data1.NumeroPedido,
  idmesa: idmesa,
  cuenta: 1,
  nombrecuenta: nombrecuenta,
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
  message:"EL PEDIDO SE HA REALIZADO EXITOSAMENTE.",
  data: data
});
}

controller.list = async (req, res) => {
  const fecha = Moment().subtract(6, 'hour').format('YYYY-MM-DD HH:mm:ss')
  const data = await pedidosMesa2.findAll()
  .then(function(data){
    

    return data;
  })
  .catch(error => {
    return error;
  }); 
  
  res.json({success : true, data : fecha});
  console.log("aqiiiiiiiiii"+fecha)
}

controller.list = async ( req, res) => {

const data = await pedidosMesa2.findAll();
res.json(data)

}

module.exports = controller;