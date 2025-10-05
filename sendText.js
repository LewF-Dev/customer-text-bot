import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendText(to, message) {
  try {
    const response = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE,
      to: to
    });
    console.log('Message sent! SID:', response.sid);
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
}

// Example test
sendText('+447432520605', 'Thank you for purchasing 24hr Anal Ointment. If you are satisfied with your purchase, perhaps leave us a review: https://youtube.com/shorts/zx36D72lYk0?si=yoQLUR56jXaGLVqh');
