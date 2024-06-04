const validarCorpoRequisicao = (arrayPropriedades) => (req, res, next) => {
    for (const item of arrayPropriedades) {
        if (!req.body[item]) {
            return res.status(400).json({ mensagem: `O campo ${item} é obrogatório.` })
        }
    }
    next()
}

module.exports = validarCorpoRequisicao
