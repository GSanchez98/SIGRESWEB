const jwt = require('jsonwebtoken');

const passportJWT = require('passport-jwt');

var sequelize = require('../model/mysql');

// ExtractJwt para ayudar a extraer el token
let ExtractJwt = passportJWT.ExtractJwt;

// JwtStrategy, que es la estrategia para la autenticación
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "GMN";

const controller = {}

var Usuario = require('../model/Usuario');
var Empleado = require('../model/Empleado');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()

//Para manejar la creación de los usuarios
controller.login = async (req,res) => {
  // data parametros enviados desde POST
  const {LoginUsuario, Contrasena} = req.body;

  console.log(req.body);
  
  if (LoginUsuario && Contrasena) {
    // obtenemos al usuario con el nombre y guardamos la promesa resuelta
    let Usuario = await obtenerUsuario({ LoginUsuario });
    

    if (!Usuario) {
      res.status(401).json({ 
        msg: "El usuario que ingreso, no se encuentra registrado.", Usuario
      });
    }else if (Usuario.Contrasena === Contrasena) {
      const idregistro= Usuario.empleado;
      let Empleado = await obtenerEmpleado({ idregistro });
      // obtener el id del usuario con el id del empleado.
      let obtenerIdUsuario = { idregistro: Usuario.idregistro };
      let nombreEmpleado = { nombre: Empleado.NombreEmpleado +' '+ Empleado.ApellidoEmpleado};

      // obtener el login del usuario.
      let obtenerUsuario = { LoginUsuario: Usuario.LoginUsuario };
      let Obtencionnombre = { NombreEmpleado: Empleado.NombreEmpleado};

      let token = jwt.sign(obtenerIdUsuario, jwtOptions.secretOrKey);
      res.json({ 
        token: token,
        obtenerIdUsuario : obtenerIdUsuario,
        obtenerUsuario : obtenerUsuario,
        nombreEmpleado : nombreEmpleado,
        obtenerEmpleado :obtenerEmpleado
      });
    } else {
      res.status(401).json({ 
        msg: "La contraseña ingresada es incorrecta."
        });
    }
  }
}

//Obtencion del Id para almacenar el Numero de pedido
const obtenerEmpleado = async obj => {
  return await Empleado.findOne({
    attributes: ['NombreEmpleado', 'ApellidoEmpleado'],
    where: obj,  
  });
};
console.log (obtenerEmpleado.NombreEmpleado)

const obtenerUsuario = async obj => {
  return await Usuario.findOne({
    where: obj,
  });
};


module.exports = controller;