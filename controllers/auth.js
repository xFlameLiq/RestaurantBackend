const { findByUsername } = require("../services/admin");
const jwt = require("jsonwebtoken");

exports.login = async (request, response) => {
    const { username, password } = request.body;
    const user = await findByUsername(username);

    if(!user) {
        return response.status(400).json({
            message: "Usuario o contraseña inválidos",
            messageDev: "No se encontró el usuario en la base de datos",
            code: "ERR_AUTH",
        })
    }

    if(user.password !== password) {
        return response.status(400).json({
            message: "Usuario o contraseña inválidos",
            messageDev: "No se encontró el usuario en la base de datos",
            code: "ERR_AUTH",
        })
    }

    const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET);
    response.status(200).json({
        jwt: token,
    });

};