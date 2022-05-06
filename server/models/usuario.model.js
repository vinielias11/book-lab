const mongoose = require('mongoose');

const Usuario = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }
});

const ModelUsuario = mongoose.model('Usuario', Usuario);

module.exports = ModelUsuario;