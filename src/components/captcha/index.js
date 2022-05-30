import { h } from 'preact';
import { useRef } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';

import ReCAPTCHA from 'react-google-recaptcha';
import {
  updateToken,
  updateCaptchaSubmit
} from 'features/captcha/captchaSlice';

const Captcha = () => {
  const dispatch = useDispatch();
  const recaptchaRef = useRef();
  const isCaptchaSubmitted = useSelector((state) => state.captcha.hasSubmitted);

  function handleChange(value) {
    dispatch(updateToken({ token: value }));
    if (value == null) dispatch(updateCaptchaSubmit({ hasSubmitted: false }));
  }

  if (isCaptchaSubmitted) {
    dispatch(updateToken({ token: null }));
    recaptchaRef.current.reset();
    dispatch(updateCaptchaSubmit({ hasSubmitted: false }));
  }

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
      onChange={handleChange}
    />
  );
};

export default Captcha;
