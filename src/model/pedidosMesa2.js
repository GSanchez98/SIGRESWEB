//importando sequelize
var Sequelize = require('sequelize');
// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'pedidos_mesas';

var pedidos_mesa = sequelize.define(nametable, {
  idregistro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncremet : true,
  },
  idpedido: Sequelize.INTEGER,
  idmesa: Sequelize.INTEGER,
  cuenta: Sequelize.INTEGER,
  nombrecuenta: Sequelize.STRING
},
{
	 timestamps: false,
});

module.exports = pedidos_mesa