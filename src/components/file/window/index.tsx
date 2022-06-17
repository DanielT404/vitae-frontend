import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'components/store';

import {
  handleFileClose,
  handleFileMinimize
} from 'utils/functions/handleFiles';

import Theme from 'utils/contexts/Theme';

import Icon from 'components/material-icon';
import style from './style.css';
import { IFile } from 'utils/interfaces/files/file.interface';

function replaceEOLWithBrTag(content: string) : string {
  return content.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

function WindowFrame() {
  const dispatch = useDispatch();
  const file : IFile | any = useSelector((state: RootState) => state.file.fileInfo);
  const { theme, setTheme } = useContext(Theme)

  return (
    <div class={`${theme === "light" && style.darkText} ${style.innerWindow}`}>
      <div class={`${theme === "light" && style.lightBoxBg} ${style.innerWindowBox}`}>
        <div class={`${theme === "light" && style.lightNavBg} ${style.innerWindowNav}`}>
          <div class={style.fileName}>
            {file.Type}s - {file.Key}
          </div>
          <div class={style.icons}>
            <Icon type="minimize" id="minimizeIcon" class={style.windowIcon} handleClick={() => handleFileMinimize(file, dispatch, file.Idx)} />
            <Icon type="fullscreen" id="fullscreenIcon" class={style.windowIcon} handleClick={() => window.open(`${file.ResourcePath}`, '_blank')} />
            <Icon type="close" id="exitIcon" class={`${style.windowIcon} ${style.exitIcon}`} handleClick={() => handleFileClose(file, dispatch)} />
          </div>
        </div>
        {file.Type === 'image' && (
          <div class={style.innerImageContent}>
            <img class={style.innerImg} src={file.ResourcePath} alt={`${file.Key} image`} />
          </div>
        )}
        {file.Type !== 'image' && file.Contents.length > 0 && (
          <div class={style.innerTextContent}>
            <div dangerouslySetInnerHTML={{ __html: replaceEOLWithBrTag(file.Contents) }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WindowFrame;
