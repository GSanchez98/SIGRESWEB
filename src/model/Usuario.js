//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'usuarios';

var Usuario = sequelize.define(nametable, {
  idregistro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  LoginUsuario: Sequelize.STRING,
  empleado: Sequelize.INTEGER,
  Contrasena: Sequelize.STRING,
  AccesoTotal: Sequelize.TINYINT,
  Habilitado: Sequelize.TINYINT,
},
{
	 timestamps: false,
});

module.exports = Usuario