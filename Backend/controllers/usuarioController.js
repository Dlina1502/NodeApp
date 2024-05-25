const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const SECRET_KEY = 'your_jwt_secret_key';

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { usuario, password, rol } = req.body;

    try {
        const newUser = await Usuario.create({ usuario, password, rol });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'User registration failed', details: error });
    }
};

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { usuario, password } = req.body;

    try {
        const user = await Usuario.findOne({ where: { usuario } });
        if (!user || !(await user.validPassword(password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id, rol: user.rol }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed', details: error });
    }
};
