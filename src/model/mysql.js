var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'sigres',      // Nombre de la base de datos
  'root',        // Nombre del usuario
  'Gmn1',        // Contraseña correspondiente.
  {
    host: 'localhost',   // Donde se encuentra la base de datos.
    dialect: 'mysql'
  }
);

module.exports = sequelize;