import { h } from 'preact'

import { Link } from 'preact-router'

import Icon from '../../material-icon'

import style from './style.css'

function TreeFrame(props) {
    return (
        <div class={style.navWrapper}>
            <nav class={style.navList}>
                <li class={style.navTreeItem}>
                    <Link href="/desktop" class={style.navTo}>
                        <Icon type="desktop_windows" class={style.mainIcon} />{' '}
                        <span
                            class={`${style.navText} ${
                                props.currentNav == 'desktop'
                                    ? style.currentMainNav
                                    : ''
                            }`}
                        >
                            Desktop
                        </span>
                    </Link>
                </li>
                <li class={style.navTreeItem}>
                    <Link href="/about-me" class={style.navTo}>
                        <Icon type="star" class={style.mainIcon} />{' '}
                        <span
                            class={`${style.navText} ${
                                props.currentNav !== 'desktop'
                                    ? style.currentMainNav
                                    : ''
                            }`}
                        >
                            Quick Access
                        </span>
                    </Link>
                    <ul class={style.navSubList}>
                        <li class={style.navTreeSubItem}>
                            <Link
                                href="/about-me"
                                class={`${style.navTo} ${
                                    props.currentNav == 'aboutMe'
                                        ? style.currentSubNav
                                        : ''
                                }`}
                            >
                                <Icon type="info" class={style.subIcon} />{' '}
                                <span class={style.navText}>About me</span>
                            </Link>
                        </li>
                        <li class={style.navTreeSubItem}>
                            <Link
                                href="/projects"
                                class={`${style.navTo} ${
                                    props.currentNav == 'projects'
                                        ? style.currentSubNav
                                        : ''
                                }`}
                            >
                                <Icon type="view_list" class={style.subIcon} />{' '}
                                <span class={style.navText}>Projects</span>
                            </Link>
                        </li>
                        <li class={style.navTreeSubItem}>
                            <Link
                                href="/resume"
                                class={`${style.navTo} ${
                                    props.currentNav == 'resume'
                                        ? style.currentSubNav
                                        : ''
                                }`}
                            >
                                <Icon
                                    type="attach_file"
                                    class={style.subIcon}
                                />{' '}
                                <span class={style.navText}>Resume</span>
                            </Link>
                        </li>
                        <li class={style.navTreeSubItem}>
                            <Link
                                href="/contact"
                                class={`${style.navTo} ${
                                    props.currentNav == 'contact'
                                        ? style.currentSubNav
                                        : ''
                                }`}
                            >
                                <Icon
                                    type="contact_mail"
                                    class={style.subIcon}
                                />{' '}
                                <span class={style.navText}>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </nav>
        </div>
    )
}

export default TreeFrame
