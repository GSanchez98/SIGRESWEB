const controller = {}

var Usuario = require('../model/Usuario');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()

//Para manejar la creación de los clientes
controller.login = async (req,res) => {
  // data parametros enviados desde POST
  const {LoginUsuario, Contrasena} = req.body;

  console.log(req.body);
  
  // create
  const data = await Usuario.findOne({
    LoginUsuario: LoginUsuario,
    Contrasena: Contrasena,
    where: {
      LoginUsuario: req.body.LoginUsuario,
      contrasena: req.body.Contrasena
      }
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    console.log("Error : "+ error)
    return error;
    
  })
  // return res
  res.status(200).json({
    success: true,
    message:"No existe tal registro",
    data: data
  });
}

module.exports = controller;