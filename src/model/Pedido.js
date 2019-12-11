//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'pruebadetalles';

var Area = sequelize.define(nametable, {
  idPruebadetalle: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  NombreProducto:Sequelize.STRING,
  IdProducto:Sequelize.STRING,
  PrecioProducto: Sequelize.DOUBLE,
  CantidadProducto: Sequelize.INTEGER,
  Mesa: Sequelize.INTEGER,
},
{
	 timestamps: false,
});

module.exports = Area