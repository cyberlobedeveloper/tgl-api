const Joi = require('joi');

module.exports = {
  signUp: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required().email(),
    zipCode: Joi.string().required()
  }),

  login: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  }),

  forgotPassword: Joi.object({
    username: Joi.string().required()
  }),

  resetPassword: Joi.object({
    code: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
  })
}
