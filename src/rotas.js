const express = require('express');
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuario');
//const intermediarioCadastrarUsuario = require('./intermediarios/intermediarioCadastrarUsuario');
const validarCorpoRequisicao = require('./intermediarios/validarCorpoRequisicao');

const rotas = express();

//rotas.post('/usuario', intermediarioCadastrarUsuario, cadastrarUsuario);

// único middleware que valida qualquer informação que vem no corpo da requisição para cadastro
rotas.post('/usuario',
    validarCorpoRequisicao(['nome', 'email', 'senha']),
    cadastrarUsuario);

rotas.get('/usuario', listarUsuarios);

module.exports = rotas