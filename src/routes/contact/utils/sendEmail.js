import getPathAPI from 'utils/getPathAPI';

async function sendEmail({ name, email, message, token }) {
  try {
    const response = await fetch(getPathAPI('sendEmail'), {
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

export default sendEmail;