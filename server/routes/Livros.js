const express = require('express');

const { 
    addLivro
} = require('../controllers/Livros');

const router = express.Router();

router.post('/addLivro', addLivro);

module.exports = router;