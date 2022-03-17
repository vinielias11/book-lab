const express = require('express');

const { 

} = require('../controllers/Livros');

const router = express.Router();

router.post('/addLivro', addLivro);

module.exports = router;