import { h } from 'preact';
import { useDispatch, useSelector } from 'react-redux';

import { handleFileOpen } from '../../utils/functions/handleFiles';

import Highlight from 'components/highlight';
import Icon from 'components/material-icon';

import style from './style.css';

function File(props) {
  const dispatch = useDispatch();
  const isViewFrameModeActive = useSelector((state) => state.frame.value);
  const { data } = props;

  return (
    <div class={style.fileWrapper}>
      <div class={style.fileIcon} onDblClick={() => handleFileOpen(data, dispatch, isViewFrameModeActive)}>
        <Icon type={data.MaterialIcon} />
      </div>
      <div class={style.fileName} onDblClick={() => handleFileOpen(data, dispatch, isViewFrameModeActive)}>
        <Highlight source={`${data.KeyShrinked}.${data.Extension}}`} />
      </div>
    </div>
  );
}

export default File;
