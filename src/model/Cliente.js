//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'clientes';

var Cliente = sequelize.define(nametable, {
  idregistro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  rtn: Sequelize.STRING,
  nombre: Sequelize.STRING,
  direccion: Sequelize.TEXT,
  telefono: Sequelize.STRING,
  correo: Sequelize.STRING,
},
{
	 timestamps: false,
});

module.exports = Cliente