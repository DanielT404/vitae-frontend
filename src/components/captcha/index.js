import { h } from 'preact';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useContext, useEffect } from 'preact/compat';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateToken,
  updateCaptchaSubmit
} from 'features/captcha/captchaSlice';

const Captcha = () => {
  const dispatch = useDispatch();
  const isCaptchaSubmitted = useSelector((state) => state.captcha.hasSubmitted);
  const recaptchaRef = useRef();

  if (recaptchaRef.current !== undefined && isCaptchaSubmitted) {
    dispatch(updateToken({ token: null }));
    recaptchaRef.current.reset();
    dispatch(updateCaptchaSubmit({ hasSubmitted: false }));
  }

  function handleChange(value) {
    dispatch(updateToken({ token: value }));
    if (value == null) dispatch(updateCaptchaSubmit({ hasSubmitted: false }));
  }

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
      onChange={handleChange}
    />
  )

};

export default Captcha;
