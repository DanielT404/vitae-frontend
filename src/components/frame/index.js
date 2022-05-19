import { h } from 'preact'

import HeaderFrame from './header'
import BodyFrame from './body'

import style from './style.css'

function Frame({props}) {
    const { path, page } = props;
    return (
        <div class={style.container}>
            <HeaderFrame path={path} />
            <BodyFrame page={page} />
        </div>
    )
}

export default Frame
