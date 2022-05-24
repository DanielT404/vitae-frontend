import { h } from 'preact'
import { useSelector } from 'react-redux'

import Desktop from '../../../routes/desktop'
import AboutMe from '../../../routes/aboutMe'
import Projects from '../../../routes/projects'
import Resume from '../../../routes/resume'
import Contact from '../../../routes/contact'

import TreeFrame from '../tree'
import WindowFrame from '../../file/window'

import style from './style.css'
import { useContext } from 'preact/hooks'
import Theme from '../../../utils/contexts/Theme'

function BodyFrame(props) {
    const isViewFileMode = useSelector((state) => state.file.viewFileMode)
    const { theme } = useContext(Theme)
    return (
        <div class={style.bodyFrame}>
            <TreeFrame currentNav={props.page} />
            {props.page == 'desktop' && <Desktop />}
            {props.page !== 'desktop' && isViewFileMode && <WindowFrame />}
            {props.page == 'aboutMe' && (
                <div
                    class={`${style.innerBody} ${
                        theme == 'light'
                            ? style.innerBodyLightColor
                            : style.innerBodyDarkColor
                    }`}
                >
                    {props.page == 'aboutMe' && <AboutMe />}
                </div>
            )}
            {props.page == 'projects' && (
                <div
                    class={`${style.innerBody} ${style.smallerMargin} ${
                        theme == 'light'
                            ? style.innerBodyLightColor
                            : style.innerBodyDarkColor
                    }`}
                >
                    <Projects />
                </div>
            )}
            {props.page == 'resume' && (
                <div class={style.resumeBg}>
                    <Resume />
                </div>
            )}
            {props.page == 'contact' && (
                <div
                    class={`${style.innerBody} ${style.smallerMargin} ${
                        theme == 'light'
                            ? style.innerBodyLightColor
                            : style.innerBodyDarkColor
                    }`}
                >
                    <Contact />
                </div>
            )}
        </div>
    )
}

export default BodyFrame
