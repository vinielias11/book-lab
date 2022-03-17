const Usuario = require('../models/usuario.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    getTodosOsUsuarios: async (req, res) => {
        const usuarios = await Usuario.find();
        
        return res.status(200).json({ status: 'ok', usuarios: usuarios });
    },

    registrar: async (req, res) => {
        try {
            const novaSenha = await bcrypt.hash(req.body.senha, 10);

            await Usuario.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: novaSenha
            });
    
            res.status(200).json({ status: 'ok' });
        } catch (err) {
            res.status(400).json({ status: 'erro', error: err });
        }
    },

    login: async (req, res) => {
        const usuario = await Usuario.findOne({ 
            email: req.body.email
        });
    
        if (!usuario) {
            return res.status(400).json({ status: 'erro', error: 'Login inválido' });
        }
    
        const isSenhaValida = await bcrypt.compare(
            req.body.senha, 
            usuario.senha
        );
    
        if (isSenhaValida) {
    
            const token = jwt.sign(
                {
                    nome: usuario.nome,
                    email: req.body.email
                },
                'segredo123'
            );
    
            return res.status(200).json({ status: 'ok', usuario: token });
        } else {
            return res.status(400).json({ status: 'erro', usuario: false });
        }
    }
};