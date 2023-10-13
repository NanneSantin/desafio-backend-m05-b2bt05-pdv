const Joi = require('joi');

const userSchema = Joi.object({
    nome: Joi.string().required().messages({
        'any.required': 'O campo nome é obrigátorio!',
        'string.empty': 'O campo nome é obrigátorio!',
        'string.base': 'O campo nome deve ser do tipo texto!'
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'O campo e-mail é obrigátorio!',
        'string.empty': 'O campo e-mail é obrigátorio!',
        'string.email': 'O campo e-mail precisa ter um formato válido.',
        'string.base': 'O campo e-mail precisa ter um formato válido.'
    }),
    senha: Joi.string().min(5).required().messages({
        'any.required': 'O campo senha é obrigátorio!',
        'string.empty': 'O campo senha é obrigátorio!',
        'string.base': 'O campo senha deve ser do tipo texto!',
        'string.min': 'A senha precisa conter, no mínimo, 5 caracteres!'
    })
});

module.exports = userSchema;