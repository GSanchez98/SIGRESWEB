//Importando los módulos de express
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const moment = require("moment");
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar cabeceras y cors
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Importando las rutas
const rutaCliente = require('./routes/rutaCliente')
const rutaArea= require('./routes/rutaArea')
const rutaUsuario= require('./routes/rutaUsuario')
const rutaMesa= require('./routes/rutaMesa')
const rutaProducto= require('./routes/rutaProducto')
const rutaTproducto= require('./routes/rutaTProducto')
const rutaPedido= require('./routes/rutaPedido')
const rutaPedidomesa= require('./routes/rutaPedidoMesa')

//Route
app.use('/cliente',rutaCliente)
app.use('/area',rutaArea)
app.use('/usuario',rutaUsuario)
app.use('/mesas',rutaMesa)
app.use('/producto',rutaProducto)
app.use('/tproductos',rutaTproducto)
app.use('/pedido',rutaPedido)
app.use('/pedidomesa',rutaPedidomesa)

// Probando la ruta
app.use('/prueba', (req, res) => {
    res.send("PROBANDO RUTA");
  });

app.use('/',(req,res)=>{
  res.send("HOLA MUNDO, ESTOY FUNCIONANDO.");
});


app.listen(app.get('port'),()=>{
  console.log("Se inicio el puerto en: "+app.get('port'))
})