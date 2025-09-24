const express = require('express');
const router = express.Router();
const {
  sendCitizenOtp,
  verifyCitizenOtp,
  loginOfficial,
  registerCitizen, // <-- Import the new function
} = require('../controllers/authController');

// Route for new user registration with password
router.post('/register', registerCitizen); // <-- ADD THIS NEW ROUTE

// Route to send an OTP to a user
router.post('/send-otp', sendCitizenOtp);

// Route to verify the OTP and log the user in
router.post('/verify-otp', verifyCitizenOtp);

// Route for officials to log in with credentials
router.post('/login/official', loginOfficial);

module.exports = router;