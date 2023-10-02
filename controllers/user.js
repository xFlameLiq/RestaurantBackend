const userService = require("../services/user");

exports.register = async function(request, response) {
    const {firstName, lastName, email, telephone} = request.body;
    // const result = createUserSchema.validate(request.body, {abortEarly: false});

    // if(result.error) {
    //     return response.status(400).json({error: "Entrada inválida", details: result.error.details});
    // }
    try {
        const user = await userService.createUser({firstName, lastName, email, telephone});
        response.status(201).json(user);
    } catch(e) {
        response.status(500).json({
            message: "Ha habido un conflicto a la hora de mandar los datos",
            messageDev: "No se ha podido crear el usuario",
            code: "500",
            error: "ERR_CREATE_USER"
        })
        console.error(">>> OH, error");
        console.error(e);
    }


}