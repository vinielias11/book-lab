const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const usuarioRoutes = require('./routes/Usuarios');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', usuarioRoutes);

mongoose.connect('mongodb://localhost:27017/book-lab');

const port = 1337;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
}); 