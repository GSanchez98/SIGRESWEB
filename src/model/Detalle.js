//importando sequelize
var Sequelize = require('sequelize');
// importando la conexion a la base de datos
var sequelize = require('./mysql');


var nametable = 'detalle_pedidos';

var detalle_pedidos = sequelize.define(nametable, {
  idregistro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  NumeroPedido: Sequelize.INTEGER,
  CodigoProducto: Sequelize.INTEGER,
  Cantidad: Sequelize.TINYINT,
  Cancelado: Sequelize.TINYINT,
  //quiza notas
  Elaborado: Sequelize.TINYINT,
  Entregado: Sequelize.TINYINT,
  Facturado: Sequelize.TINYINT,
},
{
	 timestamps: false,
});

module.exports = detalle_pedidos