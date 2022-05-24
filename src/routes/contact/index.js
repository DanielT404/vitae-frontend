import { h } from 'preact'
import { Fragment } from 'preact'
import { useContext, useEffect, useRef, useState } from 'preact/hooks'

import { Link } from 'preact-router'
import Theme from '../../utils/contexts/Theme'

import Captcha from '../../components/captcha'

import Icon from '../../components/material-icon'
import style from './style.css'
import { useSelector } from 'react-redux'

const Contact = () => {
    const { theme } = useContext(Theme)
    const captchaRef = useRef()
    const captchaToken = useSelector((state) => state.captcha.token)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState({ success: false, message: '' })

    let sendEmail = async (e) => {
        e.preventDefault()
        const API_ENDPOINT =
            process.env.NODE_ENV === 'development' ||
            process.env.NODE_ENV === 'test'
                ? 'http://localhost:3000/sendEmail'
                : 'https://idratherprogram.com/api/sendEmail'
        try {
            let res = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    token: captchaToken,
                }),
            })
            let resJson = await res.json()
            if (res.status === 200) {
                setName('')
                setEmail('')
                setMessage('')
                setResponse({
                    success: true,
                    message: resJson.message,
                    messageId: resJson.messageId,
                })
            } else {
                setResponse({ success: false, message: resJson.errors.pop() })
            }
        } catch (err) {}
    }

    return (
        <Fragment>
            {response.message !== '' && (
                <div
                    class={`${style.notification} ${
                        response.success ? style.successBg : style.errorBg
                    }`}
                >
                    <p>{response.message}</p>
                    {response.messageId && (
                        <Fragment>
                            <hr />
                            <h6>Message identifier: {response.messageId}</h6>
                        </Fragment>
                    )}
                </div>
            )}
            <div class={style.text}>
                You can reach to me via
                <span class={style.linkedIn}>
                    <a href="https://linkedin.com/test">
                        <img
                            src={`${
                                theme == 'dark'
                                    ? '/assets/linkedin-light.png'
                                    : '/assets/linkedin-dark.png'
                            }`}
                        />
                    </a>
                </span>
                or by using the form below. I usually reply within 24 hours.
                Let's do eeeeet!
            </div>
            <div class={style.formWrapper}>
                <form class={style.form} onSubmit={sendEmail}>
                    <div class={style.inputGroup}>
                        <label for="name">Your name:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Type your name..."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class={style.inputGroup}>
                        <label for="email">Your email:</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Type your email..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class={style.inputGroup}>
                        <label for="message">Message:</label>
                        <textarea
                            type="text"
                            name="message"
                            value={message}
                            placeholder="Type your message..."
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div id="google-captcha" ref={captchaRef}>
                        <Captcha ref={captchaRef} />
                    </div>
                    <input type="hidden" value={captchaToken} />
                    <button type="submit" class={style.sendBtn}>
                        Send
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

export default Contact
