const mongoose = require('mongoose');

const Livro = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    paginas: { type: Number, required: true },
    avaliacao: { type: Number },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

const ModelLivro = mongoose.model('Livro', Livro);

module.exports = ModelLivro;