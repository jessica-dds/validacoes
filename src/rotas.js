const express = require('express');
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuario');
const intermediarioCadastrarUsuario = require('./intermediarios/intermediarioCadastrarUsuario');

const rotas = express();

rotas.post('/usuario', intermediarioCadastrarUsuario, cadastrarUsuario);
rotas.get('/usuario', listarUsuarios);

module.exports = rotas