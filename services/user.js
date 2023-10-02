const userModel = require("../models/user");

exports.createUser = async function(data) {
    return userModel.create(data)
}