import { h } from 'preact'

import HeaderFrame from './header'
import BodyFrame from './body'

import style from './style.css'
import { useContext } from 'preact/hooks'
import Theme from '../../utils/contexts/Theme'

function Frame({ props }) {
    const { path, page } = props
    const { theme } = useContext(Theme)
    return (
        <div
            class={`${style.container} ${
                theme == 'light' ? style.lightBg : style.darkBg
            }`}
        >
            <HeaderFrame path={path} />
            <BodyFrame page={page} />
        </div>
    )
}

export default Frame
