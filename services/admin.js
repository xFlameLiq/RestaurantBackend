const Admin = require("../models/admin");

exports.findAll = function(){
    return Admin.findAll();
}

exports.findById = function(id){
    return Admin.findByPk(id);
}

exports.createAdmin = async function(data) {
    return Admin.create(data)
}

exports.deleteById = async function(id){
    const admin = await Admin.findByPk(id);
    await admin.destroy();
}

exports.update = async function(id, data){
    await Admin.update(data, {
        where: {
            id: id
        }
    });
}
exports.findByUsername = function (username) {
    return Admin.findOne({
        where: {
            username
        },
    });
};