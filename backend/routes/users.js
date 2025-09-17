const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// User Registration
router.post('/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).send('User with this email already exists.');
        }

        user = new User({ username, password, email });
        await user.save();
        res.status(201).send('User registered successfully.');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// User Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid credentials.');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials.');
        }

        // Create and assign a token
        const payload = { userId: user.id };
        // IMPORTANT: Replace 'your_jwt_secret' with a strong secret key in a .env file for production
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }); 

        res.status(200).json({ token, userId: user.id, username: user.username });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;