const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().min(18).required(),
    email: Joi.string().email().required()
});

module.exports = {schema};
