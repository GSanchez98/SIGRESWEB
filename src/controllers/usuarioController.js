const jwt = require('jsonwebtoken');

const passportJWT = require('passport-jwt');

// ExtractJwt para ayudar a extraer el token
let ExtractJwt = passportJWT.ExtractJwt;

// JwtStrategy, que es la estrategia para la autenticación
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "GMN";

const controller = {}

var Usuario = require('../model/Usuario');
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
      let obtenerId = { idregistro: Usuario.idregistro };
      let token = jwt.sign(obtenerId, jwtOptions.secretOrKey);
      res.json({ token: token });
    } else {
      res.status(401).json({ 
        msg: "La contraseña ingresada es incorrecta."
        });
    }
  }
}

const obtenerUsuario = async obj => {
  return await Usuario.findOne({
    where: obj,
  });
};

module.exports = controller;