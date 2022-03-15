const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario.model');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/book-lab');

app.post('/api/registrar', async (req, res) => {
    try {
        await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        });

        res.json({ status: 'ok' });
    } catch (err) {
        res.statusCode = 400;
        res.json({ status: 'erro', error: 'Email duplicado' });
    }
});

app.post('/api/login', async (req, res) => {
    const usuario = await Usuario.findOne({ 
        email: req.body.email, 
        senha: req.body.senha 
    });

    if (usuario) {

        const token = jwt.sign(
            {
                nome: usuario.nome,
                email: req.body.email
            },
            'segredo123'
        );

        return res.json({ status: 'ok', usuario: token });
    } else {
        res.statusCode = 400;
        return res.json({ status: 'erro', usuario: false });
    }

});

const port = 1337;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});