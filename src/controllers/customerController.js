var Cliente = require('../model/Cliente');
var sequelize = require('../model/mysql');


const controller = {}


controller.testdata = async ( req, res) => {
  
  const response = await sequelize.sync().then(function() {

    // creación de un cliente
    Cliente.create({
      id: '2',
      rtn: '202020',
      nombre: 'Hesler Alvarado',
      direccion: 'Otoro city',
      telefono: '6666666',
      correo: 'HAlvarado@gmail.com',
    });

    //llamar todos los datos del empleado
     const data =  Cliente.findAll()
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response)

}

controller.list = async ( req, res) => {

    const data = await Cliente.findAll();
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