//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'usuario';

var Usuario = sequelize.define(nametable, {
  idregistro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  loginUsuario: Sequelize.STRING,
  empleado: Sequelize.INTEGER,
  contrasena: Sequelize.STRING,
  accesoTotal: Sequelize.TINYINT,
  habilitado: Sequelize.TINYINT,
},
{
	 timestamps: false,
});

module.exports = Usuario