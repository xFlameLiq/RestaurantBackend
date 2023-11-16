const Joi = require('joi');

exports.createAdminSchema = Joi.object({
    name: Joi.string().pattern(/^[A-Za-z\s'-]+$/).max(100).required(),
    lastname: Joi.string().pattern(/^[A-Za-z\s'-]+$/).max(100).required(),
    address: Joi.string().pattern(/^[A-Za-z0-9\s#'-]+$/).max(150).required(),
    phone: Joi.string().pattern(/^\d+$/).max(10).required(),
    username: Joi.string().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).max(100).required(),
    password: Joi.string().min(8).max(50).required()
});

exports.updateAdminSchema = Joi.object({
    username: Joi.string().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).max(100).optional(),
    password: Joi.string().min(8).max(50).optional()
}).min(1);

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});