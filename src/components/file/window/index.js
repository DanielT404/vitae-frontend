import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleFileClose,
  handleFileMinimize
} from 'utils/functions/handleFiles';

import Icon from 'components/material-icon';

import Theme from 'utils/contexts/Theme';
import style from './style.css';

function replaceEOLWithBrTag(content) {
  return content.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

function WindowFrame() {
  const dispatch = useDispatch();
  const file = useSelector((state) => state.file.fileInfo);
  const { theme, setTheme } = useContext(Theme)

  return (
    <div class={`${theme === "light" && style.darkText} ${style.innerWindow}`}>
      <div class={`${theme === "light" && style.lightBoxBg} ${style.innerWindowBox}`}>
        <div class={`${theme === "light" && style.lightNavBg} ${style.innerWindowNav}`}>
          <div class={style.fileName}>
            {file.Type}s - {file.Key}
          </div>
          <div class={style.icons}>
            <Icon type="minimize" class={style.icon} onClick={() => handleFileMinimize(file, dispatch)} />
            <Icon type="fullscreen" class={style.icon} onClick={() => window.open(`${file.ResourcePath}`, '_blank')} />
            <Icon type="close" class={`${style.icon} ${style.exitIcon}`} onClick={() => handleFileClose(file, dispatch)} />
          </div>
        </div>
        {file.Type === 'image' && (
          <div class={style.innerImageContent}>
            <img class={style.innerImg} src={file.ResourcePath} alt={`${file.Key} image`} />
          </div>
        )}
        {file.Type !== 'image' && (
          <div class={style.innerTextContent}>
            <div dangerouslySetInnerHTML={{ __html: replaceEOLWithBrTag(file.Contents) }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WindowFrame;
