import { h, Fragment } from 'preact';
import { useContext, useRef } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';

import Theme from 'utils/contexts/Theme';

import Captcha from 'components/captcha';
import { updateCaptchaSubmit } from 'features/captcha/captchaSlice';

import Highlight from '../../components/highlight';

import {
  setName,
  setEmail,
  setMessage,
  setResponse
} from 'features/contact-form/contactFormSlice';
import sendEmail from './utils/sendEmail';


import style from './style.css';

const Contact = () => {
  const { theme } = useContext(Theme);

  const dispatch = useDispatch();
  const name = useSelector((state) => state.contactForm.name);
  const email = useSelector((state) => state.contactForm.email);
  const message = useSelector((state) => state.contactForm.message);
  const token = useSelector((state) => state.captcha.token);
  const response = useSelector((state) => state.contactForm.response);
  const captchaWrapper = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = await sendEmail({ name, email, message, token });
    if (mail?.success) {
      dispatch(setName({ name: '' }));
      dispatch(setEmail({ email: '' }));
      dispatch(setMessage({ message: '' }));
      dispatch(
        setResponse({
          success: true,
          message: mail.message,
          messageId: mail.messageId
        })
      );
      dispatch(updateCaptchaSubmit({ hasSubmitted: true }));
    } else {
      dispatch(
        setResponse({
          success: false,
          message: mail?.errors.pop()
        })
      );
    }
  };

  return (
    <div class={style.contactWrapper}>
      {response.message && (
        <div
          class={`${style.notification} ${response.success ? style.successBg : style.errorBg
            }`}
        >
          <p>{response.message}</p>
          {response?.messageId && (
            <Fragment>
              <hr />
              <h6>Message identifier: {response.messageId}</h6>
            </Fragment>
          )}
        </div>
      )}
      <div class={style.text}>
        <Highlight source="Reach me via" />
        <span class={style.linkedIn}>
          <a href="https://linkedin.com/in/daniel-țună-16596b240" rel="noreferrer" target="_blank">
            <img
              src={`${theme == 'dark'
                ? '/assets/linkedin-light.png'
                : '/assets/linkedin-dark.png'
                }`}
            />
          </a>
        </span>
        <Highlight source="or by using the form below. I usually reply within 24 hours. Let's do
        eeeeet!"/>
      </div>
      <div class={style.formWrapper}>
        <form class={style.form} onSubmit={handleSubmit}>
          <div class={style.inputGroup}>
            <label for="name">Your name:</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Type your name..."
              onChange={(e) => dispatch(setName({ name: e.target.value }))}
            />
          </div>
          <div class={style.inputGroup}>
            <label for="email">Your email:</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Type your email..."
              onChange={(e) => dispatch(setEmail({ email: e.target.value }))}
            />
          </div>
          <div class={style.inputGroup}>
            <label for="message">Message:</label>
            <textarea
              type="text"
              name="message"
              value={message}
              placeholder="Type your message..."
              onChange={(e) =>
                dispatch(setMessage({ message: e.target.value }))
              }
            />
          </div>
          <div id="google-captcha" ref={captchaWrapper}>
            <Captcha ref={captchaWrapper} />
          </div>
          <button type="submit" class={style.sendBtn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
