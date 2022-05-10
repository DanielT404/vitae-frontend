import { h } from 'preact'
import { Link } from 'preact-router'

import style from './style.css'

function Header() {
    return (
        <header class={style.header}>
            <Link class={style.redCircle} href="/"></Link>
            <Link class={style.nameBox} href="/">
                <h1 class={style.name}>Daniel Țună</h1>
                <h5 class={style.underName}>personal space</h5>
            </Link>
        </header>
    )
}

export default Header
