import { h } from 'preact';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useEffect, useState } from 'preact/compat';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'components/store';
import {
  updateToken,
  updateCaptchaSubmit
} from 'features/captcha/captchaSlice';

const Captcha = () => {
  const dispatch = useDispatch();
  const isCaptchaSubmitted = useSelector((state: RootState) => state.captcha.hasSubmitted);
  const token = useSelector((state: RootState) => state.captcha.token);
  const recaptchaRef : any = useRef();
  const siteKey : string | undefined = process.env.GOOGLE_RECAPTCHA_SITE_KEY;

  if (typeof siteKey === 'undefined') {
    throw new Error("GOOGLE_RECAPTCHA_SITE_KEY env value must be available during build time.");
  }

  useEffect(() => {
    if (recaptchaRef.current !== null && isCaptchaSubmitted) {
      dispatch(updateToken(''));
      recaptchaRef.current.reset();
      dispatch(updateCaptchaSubmit(false));
    }
  }, [isCaptchaSubmitted])

  function handleChange(value: string) {
    dispatch(updateToken(value));
    if (value == '') dispatch(updateCaptchaSubmit(false));
  }

  return (
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={handleChange}
      />
  )

};

export default Captcha;
