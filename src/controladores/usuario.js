const { usuarios } = require('../bancoDeDados');

const listarUsuarios = async (req, res) => {
    return res.json(usuarios);
}

const cadastrarUsuario = async (req, res) => {

    const { nome, email, senha } = req.body;

    const novoUsuario = {
        nome,
        email,
        senha
    }

    usuarios.push(novoUsuario);

    return res.status(201).json(novoUsuario);
}


module.exports = {
    cadastrarUsuario,
    listarUsuarios
}