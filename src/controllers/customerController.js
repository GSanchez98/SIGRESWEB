const controller = {}

var Cliente = require('../model/Cliente');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()

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