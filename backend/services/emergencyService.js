// backend/services/emergencyService.js

const twilio = require('twilio');

const makeEmergencyCall = async (report) => {
    // Check for required environment variables
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER || !process.env.HIGHER_AUTHORITY_PHONE_NUMBER) {
        console.log('Twilio credentials or authority number not found. Skipping emergency call.');
        return;
    }

    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    // Create the message for the voice call
    const message = `Emergency Alert: Multiple reports of ${report.category} have been received. Location: Near ${report.location.address}. Please investigate immediately. This is an automated message from the CivicVoice system.`;

    try {
        await client.calls.create({
            twiml: `<Response><Say voice="alice" language="en-IN">${message}</Say></Response>`,
            to: process.env.HIGHER_AUTHORITY_PHONE_NUMBER,
            from: process.env.TWILIO_PHONE_NUMBER,
        });
        console.log(`Emergency call initiated to ${process.env.HIGHER_AUTHORITY_PHONE_NUMBER}`);
    } catch (error) {
        console.error('Error initiating emergency call:', error.message);
    }
};

module.exports = { makeEmergencyCall };