require("dotenv").config(); //Importando variables de entorno.

const express = require("express"); //Importando express
const { initDatabase } = require("./db");

initDatabase();


const app = express(); //Instanciando express

//Routers
const userRouter = require("./routers/user");


//Permite trabajar con el archivo JSON.
app.use(express.json());



app.use(userRouter);

app.get("/", (request, response) => {
    console.log("HELLO WORLD!!!");
    response.send("hello from backend");
})

app.listen(process.env.PORT, () => { //Puerto por el que escucha nuestro servidor.
    console.log(">>> PUERTO ESCUCHANDO EN: " + process.env.PORT);
})