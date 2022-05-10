import { Fragment, h } from 'preact'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'preact-router'

import { toggleFrameView } from '../../features/frame/frameSlice'
import {
    openFileModeView,
    updateFileInfo,
    toggleOnMinimizedHover,
    closeFileModeView,
    closeMinimizedFile,
    clearFileInfo,
} from '../../features/file/fileSlice'

import Icon from '../material-icon'
import style from './style.css'

function Footer() {
    const minimizedFiles = useSelector((state) => state.file.minimizedFiles)
    const isViewFrameModeActive = useSelector((state) => state.frame.value)

    // const onMinimizedFileHover = false;
    // console.log(onMinimizedFileHover);

    const dispatch = useDispatch()

    return (
        <footer class={style.footer}>
            {isViewFrameModeActive ? (
                <Fragment>
                    <Link class={style.icon}>
                        <Icon type="explore" />
                    </Link>
                    <Link class={`${style.icon} ${style.isActive}`}>
                        <Icon type="cast" />
                    </Link>
                </Fragment>
            ) : (
                <Fragment>
                    <Link class={`${style.icon} ${style.isActive}`}>
                        <Icon type="explore" />
                    </Link>
                    <Link
                        class={style.icon}
                        onClick={() => dispatch(toggleFrameView())}
                    >
                        <Icon type="cast" />
                    </Link>
                </Fragment>
            )}
            {minimizedFiles && (
                <div class={style.minimizedFileWrapper}>
                    {minimizedFiles.map((file) => (
                        // file.isOnHover
                        <Fragment>
                            <div
                                class={style.wrappedFile}
                                onMouseEnter={() =>
                                    dispatch(toggleOnMinimizedHover(file))
                                }
                                onMouseLeave={() =>
                                    dispatch(toggleOnMinimizedHover(file))
                                }
                            >
                                {file.isOnHover && (
                                    <div class={style.minimizedOverview}>
                                        <div class={style.minimizedNav}>
                                            <h6
                                                onClick={() => {
                                                    dispatch(openFileModeView())
                                                    dispatch(
                                                        updateFileInfo({
                                                            ...file,
                                                            isMinimized: false,
                                                        })
                                                    )
                                                }}
                                            >
                                                {file.Key}
                                            </h6>
                                            <Icon
                                                type="close"
                                                class={`${style.icon} ${style.exitIcon}`}
                                                onClick={() => {
                                                    console.log('clicked 2')
                                                    dispatch(
                                                        closeFileModeView()
                                                    )
                                                    dispatch(
                                                        closeMinimizedFile(file)
                                                    )
                                                    dispatch(clearFileInfo())
                                                }}
                                            />
                                        </div>
                                        {file.Type === 'image' && (
                                            <img
                                                src={file.ResourcePath}
                                                style="width: 100%; height: 100%"
                                                onClick={() => {
                                                    dispatch(openFileModeView())
                                                    dispatch(
                                                        updateFileInfo({
                                                            ...file,
                                                            isMinimized: false,
                                                        })
                                                    )
                                                }}
                                            />
                                        )}
                                        {file.Type === 'text' && (
                                            <div
                                                class="textWrap"
                                                style="cursor: pointer;"
                                                onClick={() => {
                                                    dispatch(openFileModeView())
                                                    dispatch(
                                                        updateFileInfo({
                                                            ...file,
                                                            isMinimized: false,
                                                        })
                                                    )
                                                }}
                                            >
                                                <h5>{file.Contents}</h5>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <Link
                                    class={`${style.icon} ${style.notActive}`}
                                    onClick={() => {
                                        dispatch(openFileModeView())
                                        dispatch(
                                            updateFileInfo({
                                                ...file,
                                                isMinimized: true,
                                            })
                                        )
                                    }}
                                >
                                    <Icon type={file.MaterialIcon} />
                                </Link>
                            </div>
                        </Fragment>
                    ))}
                </div>
            )}
        </footer>
    )
}

export default Footer
