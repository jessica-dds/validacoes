const express = require('express');
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuario');

const rotas = express();

rotas.post('/usuario', cadastrarUsuario);
rotas.get('/usuario', listarUsuarios);

module.exports = rotas