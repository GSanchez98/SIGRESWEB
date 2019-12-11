//importando sequelize
var Sequelize = require('sequelize');
var Moment = require('moment');
// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'pedidos';

var Pedidos = sequelize.define(nametable, {
  NumeroPedido: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  idMesero: Sequelize.INTEGER,
  fechahora:{
    type: Sequelize.DATE,
  },
  Estacion: Sequelize.INTEGER,
  activo: Sequelize.TINYINT,
  Modalidad: Sequelize.ENUM({
    values: ['ME', 'DO', 'LL']}),
},
{
	 timestamps: false,
});

module.exports = Pedidos