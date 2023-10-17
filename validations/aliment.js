const Joi = require("joi");

exports.createAlimentSchema = Joi.object({
    name: Joi.string().max(100).required(),
    type: Joi.string().required(),
    price: Joi.number().min(1).required(),
    description: Joi.string().min(10).required()
});

exports.updateAlimentSchema = Joi.object({
    name: Joi.string().max(100).optional(),
    type: Joi.string().optional(),
    price: Joi.number().min(1).optional(),
    description: Joi.string().min(10).optional()
});

exports.paramsSchema = Joi.object({
    id: Joi.number().required()
})
