import { h, Fragment } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'components/store';

import Captcha from 'components/captcha';
import { updateCaptchaSubmit } from 'features/captcha/captchaSlice';

import Highlight from 'components/highlight';

import {
  setName,
  setEmail,
  setMessage,
  setResponse
} from 'features/contact-form/contactFormSlice';
import { sendEmail, EmailResponse } from './utils/sendEmail';

import WindowFrame from 'components/file/window';

import Theme from 'utils/contexts/Theme';
import style from './style.css';

const Contact = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(Theme);

  const isViewFileMode = useSelector((state: RootState) => state.file.viewFileMode);
  
  const name = useSelector((state: RootState) => state.contactForm.name);
  const email = useSelector((state: RootState) => state.contactForm.email);
  const message = useSelector((state: RootState) => state.contactForm.message);
  const token : string = useSelector((state: RootState) => state.captcha.token);
  const response = useSelector((state: RootState) => state.contactForm.response);

  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const handleSubmit = async (e: h.JSX.TargetedEvent) => {
    e.preventDefault();
    const mail : EmailResponse = await sendEmail({ name, email, message, token });
    if (mail.success) {
      dispatch(setName(''));
      dispatch(setEmail(''));
      dispatch(setMessage(''));
      dispatch(
        setResponse({
          success: true,
          message: mail.message,
          messageId: mail.messageId
        })
      );
      dispatch(updateCaptchaSubmit(true));
    } else {
      dispatch(
        setResponse({
          success: false,
          message: (mail?.errors?.pop() as string)
        })
      );
    }
    setIsNotificationShown(true);
    setTimeout(() => setIsNotificationShown(false), 6000)
  };

  return (
    <div class={style.contactWrapper}>
      {response.message && isNotificationShown && (
        <div class={`
          ${style.notification} 
          ${response.success ? style.successBg : style.errorBg}
        `}>
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
        {isViewFileMode && <WindowFrame />}
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
              onChange={(e: h.JSX.TargetedEvent<HTMLInputElement>) => dispatch(setName(e.currentTarget.value))}
            />
          </div>
          <div class={style.inputGroup}>
            <label for="email">Your email:</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Type your email..."
              onChange={(e: h.JSX.TargetedEvent<HTMLInputElement>) => dispatch(setEmail(e.currentTarget.value))}
            />
          </div>
          <div class={style.inputGroup}>
            <label for="message">Message:</label>
            <textarea
              type="text"
              name="message"
              value={message}
              placeholder="Type your message..."
              onChange={(e: h.JSX.TargetedEvent<HTMLTextAreaElement>) =>
                dispatch(setMessage(e.currentTarget.value))
              }
            />
          </div>
          <div id="google-captcha">
            <Captcha />
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
