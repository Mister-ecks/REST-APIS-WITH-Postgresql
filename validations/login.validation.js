const Joi = require("joi");

const loginValidation = () => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(9).max(20),
  });
  return schema;
};

module.exports = loginValidation;
