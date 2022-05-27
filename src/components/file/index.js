import { h } from 'preact'
import Icon from '../material-icon/index'
import style from './style.css'

import { useDispatch } from 'react-redux'
import {
    clearActiveFiles,
    addMinimizedFile,
    openFileModeView,
    updateFileInfo,
} from '../../features/file/fileSlice'

function File(props) {
    const dispatch = useDispatch()
    const { data } = props

    return (
        <div class={style.fileWrapper}>
            <div
                class={style.fileIcon}
                onDblClick={() => {
                    dispatch(clearActiveFiles())
                    dispatch(addMinimizedFile({ ...data, status: 'active' }))
                    dispatch(updateFileInfo({ ...data }))
                    dispatch(openFileModeView())
                }}
            >
                <Icon type={data.MaterialIcon} />
            </div>
            <div
                class={style.fileName}
                onDblClick={() => {
                    dispatch(clearActiveFiles())
                    dispatch(addMinimizedFile({ ...data, status: 'active' }))
                    dispatch(updateFileInfo({ ...data }))
                    dispatch(openFileModeView())
                }}
            >
                {data.KeyShrinked}.{data.Extension}
            </div>
        </div>
    )
}

export default File
