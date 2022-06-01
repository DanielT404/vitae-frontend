import { h } from 'preact';
import ReactDOM from 'preact/compat'
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, forwardRef, useEffect } from 'preact/compat';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateToken,
  updateCaptchaSubmit
} from 'features/captcha/captchaSlice';

const Captcha = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const isCaptchaSubmitted = useSelector((state) => state.captcha.hasSubmitted);
  const recaptchaRef = useRef();

  if (recaptchaRef.current !== undefined && isCaptchaSubmitted) {
    recaptchaRef.current.reset();
  }

  useEffect(() => {
    function handleChange(value) {
      dispatch(updateToken({ token: value }));
      if (value == null) dispatch(updateCaptchaSubmit({ hasSubmitted: false }));
    }

    ReactDOM.render(
      <ReCAPTCHA ref={recaptchaRef}
        sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
        onChange={handleChange}
      />,
      ref.current,
      () => {
        if (isCaptchaSubmitted) {
          dispatch(updateToken({ token: null }));
          recaptchaRef.current.reset();
          dispatch(updateCaptchaSubmit({ hasSubmitted: false }));
        }
      }
    )
  }, [])
});

export default Captcha;
