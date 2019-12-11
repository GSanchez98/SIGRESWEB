const controller = {}

var pedidosMesa = require('../model/pedidosMesa');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()


//Para manejar la creación de los clientes
controller.crear = async (req,res) => {
 //const now= new Date(Date.parse(Object.now)).toUTCString();
 //const now2 = new Date.now;
  //console.log(Date.now);
  //var f = new Date.now()
  //console.log( f.addHours(-6));
  //console.log(Date.getTimezoneOffset());
  // create
  const data = await pedidosMesa.create({
    idMesero: 1,
    //fechahora: Date.now(),
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