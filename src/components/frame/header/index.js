import { Fragment, h } from 'preact'

import { route } from 'preact-router'
import { useDispatch, useSelector } from 'react-redux'

import handleNavigation from '../../../utils/functions/handleNavigation'
import Icon from '../../material-icon'

import { toggleFrameView } from '../../../features/frame/frameSlice'

import style from './style.css'

function HeaderFrame(props) {
    const { path } = props
    const dispatch = useDispatch()

    const navHandler = (type) => {
        console.log(type)
        const goTo = handleNavigation(props.path, type)
        if (goTo !== -1) route(goTo)
    }

    return (
        <div class={style.header}>
            <div class={style.navigation}>
                {path == '/desktop' && (
                    <Fragment>
                        <Icon
                            type="arrow_back"
                            class={`${style.navIcon} ${style.notAvailableIcon}`}
                            onClick={(e) => {
                                e.preventDefault()
                                navHandler('back')
                            }}
                        />
                        <Icon
                            type="arrow_forward"
                            class={style.navIcon}
                            onClick={(e) => {
                                e.preventDefault()
                                navHandler('next')
                            }}
                        />
                    </Fragment>
                )}
                {path == '/contact' && (
                    <Fragment>
                        <Icon
                            type="arrow_back"
                            class={style.navIcon}
                            onClick={(e) => {
                                e.preventDefault()
                                navHandler('back')
                            }}
                        />
                        <Icon
                            type="arrow_forward"
                            class={`${style.navIcon} ${style.notAvailableIcon}`}
                            onClick={(e) => {
                                e.preventDefault()
                                navHandler('next')
                            }}
                        />
                    </Fragment>
                )}
                {path !== '/desktop' && path !== '/contact' && (
                    <Fragment>
                        <Icon
                            type="arrow_back"
                            class={style.navIcon}
                            onClick={(e) => {
                                e.preventDefault()
                                navHandler('back')
                            }}
                        />
                        <Icon
                            type="arrow_forward"
                            class={style.navIcon}
                            onClick={(e) => {
                                e.preventDefault()
                                navHandler('next')
                            }}
                        />
                    </Fragment>
                )}
                <Icon type="autorenew" class={style.navIcon} />
                <Icon type="arrow_upward" class={style.navIcon} />
            </div>
            <div class={style.pathBox}>
                <Icon
                    type="https"
                    class={`${style.navIcon} ${style.httpButton}`}
                />
                {path === '/' && (
                    <span class={style.path}>
                        https://idratherprogram.com/about-me
                    </span>
                )}
                {path !== '/' && (
                    <span class={style.path}>
                        https://idratherprogram.com{path}
                    </span>
                )}
            </div>
            <div class={style.keywordBox}>
                <input
                    type="text"
                    placeholder="Highlight keywords..."
                    class={style.keywordInput}
                />
            </div>
            <div class={style.exit} onClick={() => dispatch(toggleFrameView())}>
                <span>x</span>
            </div>
        </div>
    )
}

export default HeaderFrame
