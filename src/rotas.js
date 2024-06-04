const express = require('express');
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuario');
const validarCorpoRequisicao = require('./intermediarios/validarCorpoRequisicao');
const schemaUsuario = require('./validacoes/schemaUsuario');

const rotas = express();

//único middleware que valida qualquer informação que vem no corpo da requisição para cadastro
rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), cadastrarUsuario);

rotas.get('/usuario', listarUsuarios);

module.exports = rotas