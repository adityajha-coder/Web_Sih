// backend/services/otpService.js

const twilio = require('twilio');

const sendSmsOtp = async (phone, otp) => {
  // Check for environment variables
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      console.log('Twilio credentials not found. Skipping SMS.');
      return;
  }
  
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  try {
    await client.messages.create({
      body: `Your CivicVoice verification code is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone, // Phone number must include country code, e.g., +91
    });
    console.log(`SMS OTP sent to ${phone}`);
  } catch (error) {
    console.error('Error sending SMS OTP:', error.message);
  }
};

module.exports = { sendSmsOtp };