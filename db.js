const { connection, sync } = require ("./models/sequelize");
const User = require("./models/admin");

exports.initDatabase = async function() {

    await connection(); //Realiza conexión
    await sync(); //Sincroniza <<-- Importante cuidar la variable de entorno
};