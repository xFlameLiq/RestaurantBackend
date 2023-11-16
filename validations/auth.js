const Joi = require('joi');

exports.loginAdminSchema = Joi.object({
    username: Joi.string().pattern(/^[a-z]+$/).max(100).required(),
    password: Joi.string().min(8).max(50).required()
});
