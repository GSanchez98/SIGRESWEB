//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'empleados';

var empleados = sequelize.define(nametable, {
  idregistro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  NombreEmpleado : Sequelize.STRING,
  ApellidoEmpleado: Sequelize.STRING,
  Imagen: Sequelize.BLOB,
},
{
	 timestamps: false,
});

module.exports = empleados