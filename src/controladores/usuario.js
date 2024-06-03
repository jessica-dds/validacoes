const { usuarios } = require('../bancoDeDados');

const listarUsuarios = async (req, res) => {
    return res.json(usuarios);
}

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    // validações simples

    if (!nome) {
        return res.status(400).json({ mensagem: 'O campo nome é obrigatório.' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O campo e-mail é obrigatório.' })
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'O campo senha é obrigatório.' })
    }

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