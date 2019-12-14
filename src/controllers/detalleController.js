const controller = {}

var pedido = require('../model/Pedido');
var pedidosMesa = require('../model/pedidosMesa');
var detalle = require('../model/Detalle');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()


//Para manejar la creación de los detalles
controller.creardetalle = async (req,res) => {

//Obtencion del Id para almacenar el Numero de pedido
const ObtencionPedido = await pedidosMesa.findOne({
  attributes: ['NumeroPedido'],
  limit: 1,
  order: [
    ['NumeroPedido', 'DESC']
]
})
console.log (ObtencionPedido.NumeroPedido)

// create
const {CodigoProducto, Cantidad} = req.body;
const data = await detalle.create({
    NumeroPedido: ObtencionPedido.NumeroPedido,
    CodigoProducto: CodigoProducto,
    Cantidad: Cantidad,
    //quiza notas
    Elaborado: 0,
    Entregado: 0,
    Facturado: 0,
})
.then(function(data){
  return data;
})
.catch(error =>{
  console.log("ERROR : "+error)
  return error;
})
// return res
res.status(200).json({
  success: true,
  message:"REGISTRO SE REALIZÓ CON ÉXITO",
  data: data
});
}

controller.list = async ( req, res) => {

const data = await detalle.findAll();
res.json(data)

}

module.exports = controller;