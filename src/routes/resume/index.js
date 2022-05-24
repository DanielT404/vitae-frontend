import { h } from 'preact'
import { Fragment } from 'preact'

import Icon from '../../components/material-icon'
import style from './style.css'

const Resume = () => {
    return (
        <Fragment>
            <div
                class={style.downloadBtn}
                onClick={() =>
                    window.open(
                        'https://cv-variants-bucket.s3.eu-central-1.amazonaws.com/Daniel-Florin-Damian_Tuna_-_Junior_Software_Developer-1.pdf',
                        '_blank'
                    )
                }
            >
                Download CV
                <a
                    href="https://cv-variants-bucket.s3.eu-central-1.amazonaws.com/Daniel-Florin-Damian_Tuna_-_Junior_Software_Developer-1.pdf"
                    target="_blank"
                    class={style.icon}
                >
                    <Icon type="download" />
                </a>
            </div>
            <object
                data="/assets/cv.pdf"
                type="application/pdf"
                style="width: 100%; height: calc(100% - 25px)"
            >
                <iframe src="https://docs.google.com/viewer?url=cv.pdf&embedded=true"></iframe>
            </object>
        </Fragment>
    )
}

export default Resume
