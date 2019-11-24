//importando sequelize
var Sequelize = require('sequelize');
// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'cliente';

var Cliente = sequelize.define(nametable, {
  id: {
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