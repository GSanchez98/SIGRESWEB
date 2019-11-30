//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'areas';

var Area = sequelize.define(nametable, {
  CodigoArea: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  Area: Sequelize.STRING,
},
{
	 timestamps: false,
});

module.exports = Area