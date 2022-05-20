import { h } from 'preact'
import { Link } from 'preact-router'
import { useContext } from 'preact/hooks'

import Icon from '../material-icon'

import style from './style.css'

function Header() {
    return (
        <div class={style.container}>
            <header class={style.header}>
                <Link class={style.redCircle} href="/"></Link>
                <Link class={style.nameBox} href="/">
                    <h1 class={style.name}>Daniel Țună</h1>
                    <h5 class={style.underName}>personal space</h5>
                </Link>
            </header>
            <Icon type="light_mode" class={style.icon} />
        </div>
    )
}

export default Header
