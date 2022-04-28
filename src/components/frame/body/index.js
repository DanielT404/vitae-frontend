import { Link } from 'preact-router'
import { useEffect, useState } from 'preact/hooks'
import { h } from 'preact'

import TreeFrame from '../tree'
import WindowFrame from '../../file/window'
import File from '../../file'

import fileData from '../../../utils/functions/fileData'

import style from './style.css'
import { useSelector } from 'react-redux'

function BodyFrame(props) {
    const isViewFileMode = useSelector((state) => state.file.viewFileMode)
    let [fileArr, setFileArr] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/files')
            .then((response) => response.json())
            .then((data) => setFileArr(data))
    }, [])

    return (
        <div class={style.bodyFrame}>
            <TreeFrame currentNav={props.page} />

            {props.page == 'desktop' && (
                <>
                    {isViewFileMode ? (
                        <WindowFrame />
                    ) : (
                        <div
                            class={`${style.desktopContent} ${style.windowsBackground}`}
                        >
                            {fileArr?.success &&
                                fileArr.files.map((file) => (
                                    <File data={file} />
                                ))}
                        </div>
                    )}
                </>
            )}

            {props.page !== 'desktop' && isViewFileMode && <WindowFrame />}

            {props.page !== 'desktop' && !isViewFileMode && (
                <div class={style.innerBody}>
                    {props.page == 'aboutMe' && (
                        <div class={style.bodyContent}>
                            <div class={style.text}>
                                Enthusiast, self-taught 24 year old programmer
                                from Bucharest, Romania. <br />
                                Specialized in web development. <br />
                                Data structures and algorithms are my love-hate
                                relationship; out of frustration comes greater
                                progress! <br />
                                Always ready for new challenges. <br />
                                Let’s do it!
                                <div class={style.ctaSection}>
                                    <Link
                                        href="/contact"
                                        class={`${style.ctaBtn} ${style.btnLightGreen}`}
                                    >
                                        <span>Let's get in touch!</span>
                                    </Link>
                                    <Link
                                        href="/projects"
                                        class={`${style.ctaBtn} ${style.btnCyan}`}
                                    >
                                        <span>Jump to projects</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {props.page == 'projects' && <div>projects works</div>}
                    {props.page == 'resume' && <div>resume works!</div>}
                    {props.page == 'blog' && <div>blog works!</div>}
                    {props.page == 'contact' && <div>contact works!</div>}
                </div>
            )}
        </div>
    )
}

export default BodyFrame
