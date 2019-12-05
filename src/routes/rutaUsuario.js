const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const User = require('../model/Usuario')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/login', (req, res) => {
  User.findOne({
    where: {
        contraseña: req.body.contrasena
    }
  })
    .then(user => {
      if (user) {
        if (bcryptjs.compareSync(req.body.contrasena, user.contrasena)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'El usuario no existe' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('El usuario no existe')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users