import { h, Fragment } from 'preact'

import { route } from 'preact-router'
import { useContext, useState } from 'preact/hooks'
import { useDispatch, useSelector } from 'react-redux'

import {
    toggleFrameView,
    toggleNavTree,
} from '../../../features/frame/frameSlice'
import handleNavigation from '../../../utils/functions/handleNavigation'

import Theme from '../../../utils/contexts/Theme'

import Icon from '../../material-icon'
import style from './style.css'

function HeaderFrame(props) {
    const { path } = props
    const { theme } = useContext(Theme)

    const [isExpandSectionActive, setIsExpandSectionActive] = useState(false)
    const dispatch = useDispatch()
    const isNavTreeShown = useSelector((state) => state.frame.isNavTreeShown)
    const navHandler = (type) => {
        const nextPath = handleNavigation(path, type)
        if (nextPath) route(nextPath)
    }

    return (
        <Fragment>
            {isExpandSectionActive && (
                <div
                    class={style.expandSection}
                    onClick={() => setIsExpandSectionActive(false)}
                >
                    <Icon type="arrow_downward" />
                </div>
            )}
            {!isExpandSectionActive && (
                <div
                    class={`${style.header} ${
                        theme == 'light'
                            ? style.lightHeaderBg
                            : style.darkHeaderBg
                    } ${theme == 'light' ? style.borderBottomLight : ''}`}
                >
                    <div class={style.navigation}>
                        {path == '/desktop' && (
                            <Fragment>
                                <Icon
                                    type="arrow_back"
                                    class={`${style.navIcon} ${
                                        theme === 'light'
                                            ? style.navIconLight
                                            : style.navIconDark
                                    } ${
                                        theme === 'light'
                                            ? style.notAvailableIconLight
                                            : style.notAvailableIconDark
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        navHandler('back')
                                    }}
                                />
                                <Icon
                                    type="arrow_forward"
                                    class={`${style.navIcon} ${
                                        theme === 'light'
                                            ? style.navIconLight
                                            : style.navIconDark
                                    }
                                    `}
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
                                    class={`${style.navIcon} ${
                                        theme === 'light'
                                            ? style.navIconLight
                                            : style.navIconDark
                                    }
                                    `}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        navHandler('back')
                                    }}
                                />
                                <Icon
                                    type="arrow_forward"
                                    class={`${style.navIcon} ${
                                        theme === 'light'
                                            ? style.navIconLight
                                            : style.navIconDark
                                    } ${
                                        theme === 'light'
                                            ? style.notAvailableIconLight
                                            : style.notAvailableIconDark
                                    }`}
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
                                    class={`${style.navIcon} ${
                                        theme === 'light'
                                            ? style.navIconLight
                                            : style.navIconDark
                                    }
                                    `}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        navHandler('back')
                                    }}
                                />
                                <Icon
                                    type="arrow_forward"
                                    class={`${style.navIcon} ${
                                        theme === 'light'
                                            ? style.navIconLight
                                            : style.navIconDark
                                    }
                                    `}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        navHandler('next')
                                    }}
                                />
                            </Fragment>
                        )}
                        <Icon
                            type="autorenew"
                            class={`${style.navIcon} ${
                                theme === 'light'
                                    ? style.navIconLight
                                    : style.navIconDark
                            }
                            `}
                        />
                        <Icon
                            type="arrow_upward"
                            class={`${style.navIcon} ${
                                theme === 'light'
                                    ? style.navIconLight
                                    : style.navIconDark
                            }
                                    `}
                            onClick={() => setIsExpandSectionActive(true)}
                        />
                    </div>
                    <div class={style.pathBox}>
                        <Icon
                            type="https"
                            class={`${style.navIcon} ${
                                theme === 'light'
                                    ? style.navIconLight
                                    : style.navIconDark
                            } ${style.httpButton}
                                    `}
                        />
                        {path === '/' && (
                            <div
                                class={
                                    theme == 'light'
                                        ? style.pathLight
                                        : style.pathDark
                                }
                            >
                                https://idratherprogram.com/about-me
                            </div>
                        )}
                        {path !== '/' && (
                            <div
                                class={
                                    theme == 'light'
                                        ? style.pathLight
                                        : style.pathDark
                                }
                            >
                                https://idratherprogram.com{path}
                            </div>
                        )}
                    </div>
                    <div class={style.keywordBox}>
                        <input
                            type="text"
                            placeholder="Highlight keywords..."
                            class={`${style.keywordInput} ${
                                theme == 'light'
                                    ? style.keywordInputLightColor
                                    : style.keywordInputDarkColor
                            }`}
                        />
                    </div>
                    <div
                        class={style.exit}
                        onClick={() => dispatch(toggleFrameView())}
                    >
                        <span>x</span>
                    </div>
                    <div
                        class={style.hamburger}
                        onClick={() => dispatch(toggleNavTree())}
                    >
                        <Icon
                            type={
                                isNavTreeShown
                                    ? 'arrow_circle_up'
                                    : 'arrow_circle_down'
                            }
                        />
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default HeaderFrame
