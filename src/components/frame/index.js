import HeaderFrame from './header'
import BodyFrame from './body'
import { h } from 'preact'

import style from './style.css'

function Frame({ props }) {
    const { path, page } = props
    return (
        <div class={style.container}>
            <HeaderFrame path={path} />
            <BodyFrame page={page}></BodyFrame>
        </div>
    )
}

export default Frame
