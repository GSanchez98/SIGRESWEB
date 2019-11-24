//Importando los módulos de express
const express = require('express');
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());


// Importando las rutas
const employeeRouters = require('./routes/employeeRoute')
//Route
app.use('/employee',employeeRouters)

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