import { h } from 'preact';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleFileClose,
  handleFileMinimize
} from 'utils/functions/handleFiles';

import Icon from '../../material-icon/index';
import style from './style.css';

function WindowFrame() {
  const dispatch = useDispatch();
  const file = useSelector((state) => state.file.fileInfo);

  return (
    <div class={`${style.innerWindow}`}>
      <div class={style.innerWindowBox}>
        <div class={style.innerWindowNav}>
          <div class={style.fileName}>
            {file.Type}s - {file.Key}
          </div>
          <div class={style.icons}>
            <Icon type="minimize" class={style.icon} onClick={() => handleFileMinimize(file, dispatch)} />
            <Icon type="fullscreen" class={style.icon} onClick={() => window.open(`${file.ResourcePath}`, '_blank')} />
            <Icon type="close" class={`${style.icon} ${style.exitIcon}`} onClick={() => handleFileClose(file, dispatch)} />
          </div>
        </div>
        <div class={style.innerWindowContent}>
          {file.Type === 'image' && (
            <img class={style.innerWindowImg} src={file.ResourcePath} alt={`${file.Key} image`} />
          )}
          {file.Type !== 'image' && <h5>{file.Contents}</h5>}
        </div>
      </div>
    </div>
  );
}

export default WindowFrame;
