const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/book-lab');

app.post('/api/registrar', async (req, res) => {
    try {
        const novaSenha = await bcrypt.hash(req.body.senha, 10);
        await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: novaSenha
        });

        res.json({ status: 'ok' });
    } catch (err) {
        res.statusCode = 400;
        res.json({ status: 'erro', error: 'Email duplicado' });
    }
});

app.post('/api/login', async (req, res) => {
    const usuario = await Usuario.findOne({ 
        email: req.body.email
    });

    console.log(usuario)

    if (!usuario) {
        return { status: 'erro', error: 'Login inválido' }
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

        return res.json({ status: 'ok', usuario: token });
    } else {
        res.statusCode = 400;
        return res.json({ status: 'erro', usuario: false });
    }

});

app.get('/api/quote', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, 'segredo123');
        const email = decoded.email;
        const usuario = await Usuario.findOne({ email: email });

        return res.json({ status: 'ok', quote: usuario.quote });
    } catch (err) {
        console.log(err);
        res.json({ status: 'erro', error: 'invalid token' });
    }
});

app.post('/api/quote', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, 'segredo123');
        const email = decoded.email;
        const usuario = await Usuario.updateOne(
            { email: email }, 
            { $set: { quote: req.body.quote } }
        );

        return res.json({ status: 'ok' });
    } catch (err) {
        console.log(err);
        res.json({ status: 'erro', error: 'invalid token' });
    }
});

const port = 1337;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});