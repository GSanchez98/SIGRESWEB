const controller = {}

var Pedido = require('../model/Pedido');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()

//Para poder eliminar los pedidos
controller.delete = async (req,res) => {
  // parametro post
  const { Mesa } = req.body;
  console.log(req.body);
  // delete sequelize
  const del = await Pedido.destroy({
    where: { Mesa: Mesa }
  })
  res.json({success:true, deleted:del, message:"SE ELIMINÓ LA ORDEN DE LA MESA."});
}

//Para manejar la creación de los pedido
controller.crear = async (req,res) => {
  // data parametros enviados desde POST
  const {idPruebadetalle, IdProducto, NombreProducto, PrecioProducto, CantidadProducto, Mesa } = req.body;

  console.log(req.body);

  //Para generar el listado de los pedidos dentro del restaurante.
controller.list = async (req, res) => {

    const data = await Pedido.findAll()
    .then(function(data){
      return data;
    })
    .catch(error => {
      return error;
    }); 
    res.json({success : true, data : data});
  
  }
  
  controller.list = async ( req, res) => {
    const data = await Pedido.findAll();
    res.json(data)
  }
  const data = await Pedido.create({
    idPruebadetalle: idPruebadetalle,
    IdProducto:IdProducto,
    NombreProducto: NombreProducto,
    PrecioProducto: PrecioProducto,
    CantidadProducto: CantidadProducto,
    Mesa: Mesa,
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
    message:"SE HA REALIZADO CON EXITO SU ORDEN.",
    data: data
  });
}

controller.list = async ( req, res) => {

  const data = await Pedido.findAll();
  res.json(data)

}

controller.test = (req,res) => {

const data = {
name: "Jhon Smith",
age: 20,
city: 'London'
}

console.log("Enviar datos del empleado al controlador");
res.json(data);

};

module.exports = controller;