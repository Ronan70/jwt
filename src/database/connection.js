const dados = "production";
const configuracao = require('../../knexfile')[dados];
const connection = require('knex')(configuracao);

module.exports = connection;
