const knex = require('../connection');

const validateClientIdExist = async (request, response, next) => {
  try {
    const id = request.params.id;

    const client = await knex('clientes').where('id', id).first();

    if (!client) {
      return response
        .status(404)
        .json({ message: 'Não existe cliente com o ID informado.' });
    }

    request.product = product;

    next();
  } catch (error) {
    return response.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

module.exports = validateClientIdExist;