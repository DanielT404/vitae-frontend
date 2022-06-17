import { h } from 'preact';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'components/store';

import { IFile } from 'utils/interfaces/files/file.interface';
import { handleFileOpen } from 'utils/functions/handleFiles';

import Highlight from 'components/highlight';
import Icon from 'components/material-icon';

import style from './style.css';

function File({ data } : { data : IFile }) {
  const isViewFrameModeActive = useSelector((state: RootState) => state.frame.value);
  const lastMinimizedFileIdx = useSelector((state: RootState) => state.file.minimizedFiles).length - 1;
  const dispatch = useDispatch();

  return (
    <div class={style.fileWrapper}>
      <div class={style.fileIcon} onDblClick={() => handleFileOpen(data, dispatch, isViewFrameModeActive, lastMinimizedFileIdx + 1)}>
        <Icon type={data.MaterialIcon} />
      </div>
      <div class={style.fileName} onDblClick={() => handleFileOpen(data, dispatch, isViewFrameModeActive, lastMinimizedFileIdx + 1)}>
        <Highlight source={`${data.KeyShrinked}.${data.Extension}}`} />
      </div>
    </div>
  );
}

export default File;
