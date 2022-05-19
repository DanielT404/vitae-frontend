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

function BodyFrame(props) {
    const isViewFileMode = useSelector((state) => state.file.viewFileMode)
    return (
        <div class={style.bodyFrame}>
            <TreeFrame currentNav={props.page} />
            {props.page == 'desktop' && <Desktop/>}
            {props.page !== 'desktop' && isViewFileMode && <WindowFrame />}
            {props.page == 'aboutMe' && (
                <div class={style.innerBody}>
                    {props.page == 'aboutMe' && (<AboutMe/>)}
                </div>
            )}
            {props.page == 'projects' && (
                <div class={style.innerBody}>
                    <Projects/>
                </div>
            )}
            {props.page == 'resume' && (
                <div class={style.resumeBg}>
                    <Resume/>
                </div>
            )}
            {props.page == 'contact' && (
                <div class={style.innerBody}>
                    <Contact/>
                </div>
            )}
        </div>
    )
}

export default BodyFrame
