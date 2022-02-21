const Joi = require("joi");

const registerValidation = () => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(9).max(20),
    phoneNumber: Joi.string().required().max(11).min(11),
  });
  return schema;
};

module.exports = registerValidation;
