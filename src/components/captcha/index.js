import ReCAPTCHA from 'react-google-recaptcha';
import ReactDOM, { forwardRef } from 'preact/compat';
import { useEffect, useRef } from 'preact/hooks';

import { useDispatch, useSelector } from 'react-redux';
import {
  updateToken,
  updateCaptchaSubmit
} from '../../features/captcha/captchaSlice';

const Captcha = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const captchaRef = useRef({});
  const isCaptchaSubmitted = useSelector((state) => state.captcha.hasSubmitted);
  function handleChange(value) {
    dispatch(updateToken({ token: value }));
  }
  function handleExpire() {
    dispatch(updateToken({ token: null }));
    dispatch(updateCaptchaSubmit({ hasSubmitted: false }));
  }

  if (isCaptchaSubmitted) {
    dispatch(updateToken({ token: null }));
    captchaRef.current.reset();
    dispatch(updateCaptchaSubmit({ hasSubmitted: false }));
  }

  useEffect(() => {
    ReactDOM.render(
      <ReCAPTCHA
        ref={captchaRef}
        sitekey="6LeSFhcgAAAAAP9tpyl7XTkbmAFjSvP3ukCPb91w"
        onChange={handleChange}
        onExpire={handleExpire}
      />,
      ref.current
    );
  }, []);
});

export default Captcha;
