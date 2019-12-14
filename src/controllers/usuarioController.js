const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");


const controller = {}

var Usuario = require('../model/Usuario');
var sequelize = require('../model/mysql');


//para migrar por si no se tienen las tablas
sequelize.sync()

//Para manejar la creación de los usuarios
controller.login = async (req,res) => {
  // data parametros enviados desde POST
  const {LoginUsuario, Contrasena} = req.body;

  console.log(req.body);
  
  // create
  const data = await Usuario.findOne({
    
    where: {
      LoginUsuario: LoginUsuario,
      Contrasena: Contrasena,
      }
  })
  .then(function(data){
  console.log("Registro encontrado, se puede acceder")
    return data;
  })
  .catch(error =>{
     // return res
  res.status(200).json({
    success: true,
    message:"no existe dato",
    data: data
  });
    
  })
}

module.exports = controller;