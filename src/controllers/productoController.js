const controller = {}

var Producto = require('../model/Producto');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()

//Para poder obtener los productos que pertenecen a una determinada categoría.
controller.getTproducto = async (req, res) => {
  const { id } = req.params;
  const data = await Producto.findAll({
    where: { TipoProducto: id}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  })
  res.json({success:true, data:data});
}

controller.list = async ( req, res) => {

  const data = await Producto.findAll();
  res.json(data)

}


module.exports = controller;