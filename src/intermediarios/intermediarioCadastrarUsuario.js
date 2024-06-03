const intermediarioCadastrarUsuario = async (req, res, next) => {
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

    next()
}

module.exports = intermediarioCadastrarUsuario