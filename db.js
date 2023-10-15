const { connection, sync } = require ("./models/sequelize");
const Admin = require("./models/admin");
const Aliment = require("./models/aliment");
const Employee = require("./models/employee");

exports.initDatabase = async function() {
    
    await connection(); //Realiza conexión
    await sync(); //Sincroniza <<-- Importante cuidar la variable de entorno
};