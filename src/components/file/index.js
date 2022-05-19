import { h } from 'preact'
import Icon from '../material-icon/index'
import style from './style.css'

import { useDispatch } from 'react-redux'
import { openFileModeView, updateFileInfo } from '../../features/file/fileSlice'

function File(props) {
    const dispatch = useDispatch()
    const { data } = props

    return (
        <div class={style.fileWrapper}>
            <div
                class={style.fileIcon}
                onDblClick={() => {
                    dispatch(openFileModeView())
                    dispatch(updateFileInfo({ ...data, isMinimized: false }))
                }}
            >
                <Icon type={data.MaterialIcon} />
            </div>
            <div
                class={style.fileName}
                onDblClick={() => {
                    dispatch(openFileModeView())
                    dispatch(updateFileInfo({ ...data, isMinimized: false }))
                }}
            >
                {data.KeyShrinked}.{data.Extension}
            </div>
        </div>
    )
}

export default File
