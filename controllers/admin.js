const adminService = require("../services/admin");

exports.getAdmin = async function(request, response){
    try {
        const admin = await adminService.findAll();
        response.status(200).json(admin);
    } catch(e) {
        response.status(404).json({
            message: e.message,
            messageDev: "No se han podido leer los usuarios",
            error: "ERR_READ_USER",
            details: e
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}

exports.getAdminById = async function(request, response){
    const id = request.params.id;
    try {
        const admin = await adminService.findById(id);
        response.status(200).json(admin);
    } catch(e) {
        response.status(404).json({
            message: e.message,
            messageDev: "No se ha podido leer el usuario",
            error: "ERR_READ_USER",
            details: e
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}

exports.insertAdmin = async function(request, response) {
    const {name, lastname, address, phone, username, password} = request.body;
    try {
        const admin = await adminService.createAdmin({name, lastname, address, phone, username, password});
        response.status(201).json(admin);
    } catch(e) {
        response.status(400).json({
            message: e.message,
            messageDev: "No se ha podido crear el usuario",
            error: "ERR_CREATE_USER",
            details: e
        });
        console.error(">>> OH, error");
        console.error(e);
    }
}

exports.updateAdmin = async function(request, response){
    const id = request.params.id;
    const content = request.body;
    try {
        const admin = await adminService.update(id, content);
        response.status(204).json(admin);
    } catch(e) {
        response.status(400).json({
            message: e.message,
            messageDev: "No se ha podido actualizar el usuario",
            error: "ERR_UPDATE_USER",
            details: e
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}

exports.deleteAdmin = async function(request, response){
    const id = request.params.id;
    try {
        await adminService.deleteById(id);
        response.status(204).end();
    } catch(e) {
        response.status(404).json({
            message: e.message,
            messageDev: "No se ha podido eliminar el usuario",
            error: "ERR_DELETE_USER",
            details: e
        })
        console.error(">>> OH, error");
        console.error(e);
    }
}