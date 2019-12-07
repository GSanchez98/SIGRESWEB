//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'tipoproductos';

var Tipoproducto = sequelize.define(nametable, {
  CodigoTipo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  NombreTipo: Sequelize.STRING,
},
{
	 timestamps: false,
});

module.exports = Tipoproducto