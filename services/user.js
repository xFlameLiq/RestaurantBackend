const Admin = require("../models/admin");

exports.createAdmin = async function(data) {
    return Admin.create(data)
}

exports.findAll = function(){
    return Admin.findAll();
}

exports.deleteById = async function(id){
    const admin = await Admin.findByPk(id);
    await admin.destroy();
}

exports.update = async function(id, data){
    await Admin.update(data, {
        where: {
            id,
        }
    });
}