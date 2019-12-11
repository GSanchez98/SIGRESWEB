//const express = require('express')
//const users = express.Router()

const express = require('express');
const router = express.Router();

//Importando rutas.
const usuarios = require('../controllers/usuarioController')

router.post('/login',usuarios.login);
// const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcryptjs = require('bcryptjs')

// const User = require('../model/Usuario')
// users.use(cors())

// process.env.SECRET_KEY = 'secret'

// users.post('/login', (req, res) => {
//   // data parametros enviados desde POST
//   const {LoginUsuario, Contrasena} = req.body;

//   console.log("DATOS RECOLECTADOS DESDE: "+ req.body);

//   //buscar
//   User.findOne({
//     LoginUsuario: LoginUsuario,
//     Contrasena:Contrasena,

//     where: {
//         LoginUsuario: req.body.LoginUsuario,
//         contrasena: req.body.Contrasena
//     }
//   })
//     .then(user => {
//       if (user) {
//         if (bcryptjs.compareSync(req.body.contrasena, user.contrasena)) {
//           let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
//             expiresIn: 1440
//           })
//           res.send(token)
//         }
//       } else {
//         res.status(400).json({ error: 'Los datos ingresados son erroneos' })
//       }
//     })
//     .catch(err => {
//       res.status(400).json({ error: err })
//     })
// })

module.exports = router