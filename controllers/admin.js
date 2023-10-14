const adminService = require("../services/user");

exports.insertAdmin = async function(request, response) {
    const {username, password} = request.body;
    // const result = createUserSchema.validate(request.body, {abortEarly: false});

    // if(result.error) {
    //     return response.status(400).json({error: "Entrada inválida", details: result.error.details});
    // }
    try {
        const admin = await adminService.createAdmin({username, password});
        response.status(201).json(admin);
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

exports.getAdmin = async function(request, response){
    try {
        const admin = await adminService.findAll();
        response.status(200).json(admin);
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

exports.updateAdmin = async function(request, response){
    try {
        const id = request.params.id;
        const content = request.body;
        const admin = await adminService.update(id, content);
        response.status(204).json(admin);
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

exports.deleteAdmin = async function(request, response){
    try {
        const id = request.params.id;
        await adminService.deleteById(id);
        response.status(204).end();
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