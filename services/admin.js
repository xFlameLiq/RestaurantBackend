const Admin = require("../models/admin");
const { hash } = require("./security");

exports.findAll = function(){
    return Admin.findAll({
        attributes:{
          exclude: ['password']
        }
      });
};

exports.findById = async function(id){
    const admin = await Admin.findByPk(id);
    if(admin)
        delete admin.dataValues.password;
    return admin;
};

exports.createAdmin = async function(data) {
    data.password = await hash(data.password);
    const admin = await Admin.create(data);
    delete admin.dataValues.password;
    return admin;
};

exports.deleteById = async function(id){
    const admin = await Admin.findByPk(id);
    await admin.destroy();
};

exports.update = async function(id, data){
    if(data.password)
        data.password = await hash(data.password);
    await Admin.update(data, {
        where: {
            id: id
        }
    });
};