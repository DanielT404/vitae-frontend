import getPathAPI from 'utils/global/getPathAPI';
import { SEND_EMAIL_API_ROUTE } from 'utils/global/constants';

async function sendEmail({ name, email, message, token } : { name: string, email: string, message: string, token: string }) {
  try {
    getPathAPI(SEND_EMAIL_API_ROUTE);
  } catch(err) {
    throw new Error(`Couldn't get API path. Error message: \n \t${err}`);
  }
  try {
    const response = await fetch(getPathAPI(SEND_EMAIL_API_ROUTE) as string, {
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
  } catch (err) {
    throw new Error(err as string);
  }
}
export type EmailResponse = {
  success: boolean,
  message: string,
  messageId?: string,
  errors?: string[]
}
export { sendEmail };
