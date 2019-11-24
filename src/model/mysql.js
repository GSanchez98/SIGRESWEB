var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'pruebasigresweb',      // Nombre de la base de datos
  'root',     // Nombre del usuario
  'gmn1',  // Contraseña correspondiente.
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;