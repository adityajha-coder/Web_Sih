const twilio = require('twilio');

const sendSmsOtp = async (phone, otp) => {
  // Check for environment variables
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER) {
      console.log('Twilio credentials not found. Skipping SMS.');
      return;
  }

  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  try {
    // Ensure the phone number is in E.164 format
    let formattedPhone = phone;
    if (!formattedPhone.startsWith('+')) {
        // Assuming Indian phone numbers if no country code is provided
        formattedPhone = `+91${phone}`;
    }

    await client.messages.create({
      body: `Your CivicVoice verification code is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: formattedPhone,
    });
    console.log(`SMS OTP sent to ${formattedPhone}`);
  } catch (error) {
    console.error('Error sending SMS OTP:', error.message);
  }
};

module.exports = { sendSmsOtp };
