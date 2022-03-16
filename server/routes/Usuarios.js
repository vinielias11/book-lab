const express = require('express');

const { 
    getTodosOsUsuarios,
    registrar,
    login
} = require('../controllers/Usuarios');

const router = express.Router();

router.get('/usuarios', getTodosOsUsuarios);
router.post('/registrar', registrar);
router.post('/login', login);

module.exports = router;