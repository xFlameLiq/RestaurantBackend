const { Sequelize } = require("sequelize");


const {
    MYSQL_HOST,
    MYSQL_DATABASE,
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    MYSQL_FORCE_UPDATE,
} = process.env

// const sequelize = new Sequelize({
//     dialect: "mysql",
//     host: MYSQL_HOST,
//     username: MYSQL_USERNAME,
//     password: MYSQL_PASSWORD,
//     database: MYSQL_DATABASE,
// });

const sequelize = new Sequelize({
    //Indicamos que vamos a conectarnos con sqlite
    dialect: 'sqlite',
    //Lugar de almacenamiento del archivo de la DB
    storage: './db.db'
});

exports.sequelize = sequelize;

exports.connection = async function() {
    try {
        await sequelize.authenticate();
        console.log(">>> Connected to the database");
    } catch(e) {
        console.error(">>> Connection refused");
        console.error(e);
    }
}

exports.sync = async function() {
    try {
       //Si la variable de entorno es si, va a actualizar, si no se pospone
        if(MYSQL_FORCE_UPDATE === "yes") {
            await sequelize.sync({force: MYSQL_FORCE_UPDATE === "yes"});
            console.log(">>> Database has been updated");
        } else {
            console.log(">>> Database update has been postponed");
        }

    } catch(e) {
        console.error(" >>> Database can't be updated");
        console.error(e);
    }
}