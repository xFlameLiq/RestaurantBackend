const Joi = require('joi');

exports.createAdminSchema = Joi.object({
    username: Joi.string().pattern(/^[a-z]+$/).max(100).required(),
    password: Joi.string().min(8).max(50).required()
});

exports.updateAdminSchema = Joi.object({
    username: Joi.string().pattern(/^[a-z]+$/).max(100).optional(),
    password: Joi.string().min(8).max(50).optional()
}).min(1);

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});