import getPathAPI from 'utils/global/getPathAPI';
import { SEND_EMAIL_API_ROUTE } from 'utils/global/constants';

async function sendEmail({ name, email, message, token } : { name: string, email: string, message: string, token: string }) {
  try {
    const response = await fetch(getPathAPI(SEND_EMAIL_API_ROUTE), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message,
        secret: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
        token
      })
    });
    const data = await response.json();
    return data;
  } catch (err) {}
}
export type EmailResponse = {
  success: boolean,
  message: string,
  messageId?: string,
  errors?: string[]
}
export { sendEmail };
