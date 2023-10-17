require("dotenv").config(); //Importando variables de entorno.
const express = require("express"); //Importando express

const { initDatabase } = require("./db");

initDatabase();

const app = express(); //Instanciando express

//Routers
const adminRouter = require("./routers/admin");
const employeeRouter = require("./routers/employee");
const authRouther = require("./routers/auth");
const alimentRouter = require("./routers/aliment")

//Errores
const validationError = require('./middlewares/validation-error');
const unknownError = require('./middlewares/unknown-error');

//Permite trabajar con el archivo JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(employeeRouter)
app.use(adminRouter);
app.use(authRouther);
app.use(alimentRouter);

// Manejo de errores
app.use(validationError);
app.use(unknownError);

app.get("/", (request, response) => {
    console.log("HELLO WORLD!!!");
    response.send("hello from backend");
})

app.listen(process.env.PORT, () => { //Puerto por el que escucha nuestro servidor.
    console.log(">>> PUERTO ESCUCHANDO EN: " + process.env.PORT);
})