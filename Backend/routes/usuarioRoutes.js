const express = require('express');
const { body } = require('express-validator');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.post('/register', [
    body('usuario').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('rol').isIn(['admin', 'employee']).withMessage('Invalid role')
], usuarioController.register);

router.post('/login', [
    body('usuario').isLength({ min: 5 }).withMessage('Username must be at least 3 characters long'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 5 characters long')
], usuarioController.login);

module.exports = router;
