// backend/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const {
  sendCitizenOtp,
  verifyCitizenOtp,
  loginOfficial,
} = require('../controllers/authController');

// Route to send an OTP to a user
router.post('/send-otp', sendCitizenOtp);

// Route to verify the OTP and log the user in
router.post('/verify-otp', verifyCitizenOtp);

// Route for officials to log in with credentials
router.post('/login/official', loginOfficial);

module.exports = router;