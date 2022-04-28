import { h } from 'preact';
import { useDispatch, useSelector } from 'react-redux';
import { addMinimizedFile, clearFileInfo, closeFileModeView, closeMinimizedFile, toggleViewMinimizedFileHover, toggleIsActive, updateFileInfo } from '../../../features/file/fileSlice';

import Icon from '../../material-icon/index';
import style from './style';



function WindowFrame(props) {

    const file = useSelector(state => state.file.fileInfo);
    console.log(file);
    const dispatch = useDispatch();

    return (
        <div class={`${style.innerWindow} ${style.windowsBackground}`}>
            <div class={style.innerWindowBox}>
                <div class={style.innerWindowNav}>
                    <div class={style.fileName}>
                        {file.Type}s - {file.Key}
                    </div>
                    <div class={style.icons}>
                        <Icon type="minimize" class={style.icon} onClick={() => 
                            {
                            dispatch(updateFileInfo({...file, isMinimized: true}));
                            dispatch(addMinimizedFile(file));
                            dispatch(closeFileModeView());
                            }
                            }/>
                        <Icon type="fullscreen" class={style.icon} onClick={() => {
                            window.open(`${file.ResourcePath}`, "_blank");
                        }}/>
                        <Icon type="close" class={`${style.icon} ${style.exitIcon}`} 
                            onClick={() => 
                            {
                                dispatch(closeFileModeView());
                                dispatch(closeMinimizedFile(file));
                                dispatch(clearFileInfo());
                            }
                            }/>
                    </div>
                </div>
                <div class={style.innerWindowContent}>
                    {file.Type === "image" && 
                        <img class={style.innerWindowImg} src={file.ResourcePath} alt={`${file.Key} image`}/>
                    }
                    {file.Type !== "image" && 
                        <h5>{file.Contents}</h5>
                    }
                </div>
            </div>
        </div> 
    );
}

export default WindowFrame;