require("dotenv").config(); //Importando variables de entorno.

const express = require("express"); //Importando express
const app = express(); //Instanciando express

app.get("/", (request, response) => {
    console.log("HELLO WORLD!!!");
    response.end();
})

app.listen(process.env.PORT, () => { //Puerto por el que escucha nuestro servidor.
    console.log(">>> PUERTO ESCUCHANDO EN: " + process.env.PORT);
})