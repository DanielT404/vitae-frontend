import getPathAPI from '../../../utils/getPathAPI';

const verifyToken = async (token) => {
  try {
    const response = await fetch(getPathAPI('captcha/verify/token'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret: '6LeSFhcgAAAAAFQ7fsQVS0sxtM8OTLzlYUE7ljxo',
        response: token
      })
    });
    const data = await response.json();
    if (response.status === 200) {
      return data;
    }
  } catch (err) {}
};

export default verifyToken;
