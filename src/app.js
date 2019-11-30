//Importando los módulos de express
const express = require('express');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

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
//Route
app.use('/cliente',rutaCliente)
app.use('/area',rutaArea)

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