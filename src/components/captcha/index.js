import { h } from 'preact';
import ReactDOM from 'react-dom'
import ReCAPTCHA from 'react-google-recaptcha';
import { forwardRef, useEffect } from 'preact/compat';
import { useRef } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateToken,
  updateCaptchaSubmit
} from 'features/captcha/captchaSlice';

const Captcha = forwardRef((props, ref) => {
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

  useEffect(() => {
    ReactDOM.render(
      <ReCAPTCHA ref={recaptchaRef}
        sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
        onChange={handleChange}
      />,
      ref.current
    )
  }, [ref])
});

export default Captcha;
