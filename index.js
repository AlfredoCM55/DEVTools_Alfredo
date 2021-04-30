const express = require("express")
const app = express();

app.listen(3000,() =>{
    console.log("EL SERVIDOR ESTA EN LINEA");

})

app.get('/', function (req, res) {
    res.send('Consultado con exito');
  });

  app.post('/', function (req, res) {
    res.send('Agregado con exito');
  });

