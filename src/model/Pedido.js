//importando sequelize
var Sequelize = require('sequelize');

// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'mesas';

var Area = sequelize.define(nametable, {
  idregistro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  codigoArea:Sequelize.INTEGER,
  mesa: Sequelize.STRING,
  estado: Sequelize.STRING,

},
{
	 timestamps: false,
});

module.exports = Area