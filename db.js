const { connection, sync } = require ("./models/sequelize");
const User = require("./models/user");

exports.initDatabase = async function() {

    await connection(); //Realiza conexión
    await sync(); //Sincroniza <<-- Importante cuidar la variable de entorno
};