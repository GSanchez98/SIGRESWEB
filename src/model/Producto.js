//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'productos';

var Producto = sequelize.define(nametable, {
  Codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  Nombre: Sequelize.STRING,
  TipoProducto: Sequelize.INTEGER,
  Precio: Sequelize.DOUBLE,
},
{
	 timestamps: false,
});

module.exports = Producto