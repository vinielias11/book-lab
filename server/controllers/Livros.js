const Livro = require('../models/livro.model');

module.exports = {
    addLivro: async (req, res) => {
        try {
            await Livro.create({
                titulo: req.body.titulo,
                autor: req.body.autor,
                paginas: req.body.paginas,
                avaliacao: req.body.avaliacao,
                usuario: req.body.usuario
            });
        } catch(err) {
            res.status(400).json({ status: 'erro', error: err });
        }
    }
}