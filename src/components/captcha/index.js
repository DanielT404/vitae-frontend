import ReCAPTCHA from 'react-google-recaptcha'
import ReactDOM, { forwardRef } from 'preact/compat'
import { useEffect } from 'preact/hooks'

import { useDispatch } from 'react-redux'
import { updateToken } from '../../features/captcha/captchaSlice'

const Captcha = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    useEffect(() => {
        function handleChange(value) {
            dispatch(updateToken({ token: value }))
        }
        function handleExpire() {
            dispatch(updateToken({ token: null }))
        }
        ReactDOM.render(
            <ReCAPTCHA
                sitekey="6LeSFhcgAAAAAP9tpyl7XTkbmAFjSvP3ukCPb91w"
                onChange={handleChange}
                onExpire={handleExpire}
            />,
            ref.current
        )
    }, [])
})

export default Captcha
