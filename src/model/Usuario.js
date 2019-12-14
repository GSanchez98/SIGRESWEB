//importando sequelize
var Sequelize = require('sequelize');
var bcrypt = require("bcryptjs");

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'usuarios';

var Usuario = sequelize.define(nametable, {
  idregistro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  LoginUsuario: {
    type: Sequelize.STRING,
    unique: true,
  },
  empleado: Sequelize.INTEGER,
  Contrasena: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  AccesoTotal: Sequelize.TINYINT,
  Habilitado: Sequelize.TINYINT,
},
{
	 timestamps: false,
});

  // Creando un método personalizado para nuestro modelo de Usuario.
  // Esto verificará si una contraseña ingresada por el usuario se 
  // puede comparar con la contraseña hash almacenada en nuestra base de datos
  Usuario.prototype.validPassword = function(Contrasena) {
    return bcrypt.compareSync(Contrasena, this.Contrasena);
  };

module.exports = Usuario