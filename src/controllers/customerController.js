const controller = {}

var Cliente = require('../model/Cliente');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()

// //Para poder eliminar los clientes
// controller.delete = async (req,res) => {

//   // parametro post
//   const { id } = req.body;
//   // delete sequelize
//   const del = await Cliente.destroy({
//     where: { id: id }
//   })
//   res.json({success:true, deleted:del, message:"El cliente ha sido eliminado con éxito"});

// }

// //Para poder actualizar los clientes
// controller.update = async (req, res) => {
//   // se obtiene el id del cliente
//   const { id } = req.params;
//   // parametro post
//   const {rtn, nombre, direccion, telefono, correo } = req.body;
//   // actualizar dato
//   const data = await Employee.update({
//     rtn: rtn,
//     nombre:nombre,
//     direccion:direccion,
//     telefono:telefono,
//     correo:correo
//   },{
//     where: { id: id}
//   })
//   .then( function (data){
//     return data;
//   })
//   .catch(error => {
//     return error;
//   })

//   res.json({ success:true, data: data, message: "los datos del cliente han sido modificados con éxito"});

// }

// //Para poder obtener los datos del cliente
// controller.get = async (req, res) => {
//   const { id } = req.params;
//   const data = await Cliente.findAll({
//     where: { id: id}
//   })
//   .then( function(data){
//     return data;
//   })
//   .catch(error => {
//     return error;
//   })
//   res.json({success:true, data:data});
// }

//Para generar el listado de los clientes
controller.list = async (req, res) => {

  const data = await Cliente.findAll()
  .then(function(data){
    return data;
  })
  .catch(error => {
    return error;
  }); 

  res.json({success : true, data : data});

}


//Para manejar la creación de los clientes
controller.crear = async (req,res) => {
  // data parametros enviados desde POST
  const {rtn, nombre, telefono, correo, direccion } = req.body;
  // create
  const data = await Cliente.create({
    rtn: rtn,
    nombre: nombre,
    telefono: telefono,
    correo: correo,
    direccion: direccion,
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
    message:"El registro se ha almacenado con éxito.",
    data: data
  });
}

controller.list = async ( req, res) => {

  const data = await Cliente.findAll();
  res.json(data)

}

// controller.testdata = async ( req, res) => {
  
//   const response = await sequelize.sync().then(function() {

//     // creación de un cliente
//     Cliente.create({
//       id: '3',
//       rtn: '102030',
//       nombre: 'xxxx',
//       direccion: 'Hola',
//       telefono: '77777',
//       correo: 'Hola@gmail.com',
//     });

//     //llamar todos los datos del empleado
//      const data =  Cliente.findAll()
//      return data;
//   })
//   .catch(err => {
//     return err;
//   });
//   res.json(response)

// }



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