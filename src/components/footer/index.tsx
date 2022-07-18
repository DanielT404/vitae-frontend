//@ts-ignore
import { h, Fragment } from 'preact';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'components/store';
import { Link } from 'preact-router';

import { openFrameView, closeFrameView } from 'features/frame/frameSlice';
import { clearFileInfo, clearMinimizedFiles, clearPreviousActiveFile, closeFileModeView, openFileModeView, resetMinimizedActiveFileQueue } from 'features/file/fileSlice';
import { updateToken } from 'features/captcha/captchaSlice';

import Icon from 'components/material-icon';
import MinimizedFiles from 'components/file/minimized';

import style from './style.css';

function Footer({ absolutePositionBottom }: { absolutePositionBottom?: boolean }) {
  const dispatch = useDispatch();
  const isViewFrameModeActive = useSelector((state: RootState) => state.frame.value);
  let isFileInfo = useSelector((state: RootState) => state.file.fileInfo);
  isFileInfo = Object.keys(isFileInfo).length > 0;
  return (
    <footer class={`${style.footer} ${absolutePositionBottom ? style.absolutePositionBottom : ''}`}>
      <Fragment>
        <Link id="explore" class={`${style.icon} ${!isViewFrameModeActive && style.isActive}`}>
          <Icon type="explore" handleClick={() => {
            dispatch(updateToken(''));
            dispatch(closeFrameView());
            dispatch(closeFileModeView());
          }
          } />
        </Link>
        <Link id="cast" class={`${style.icon} ${isViewFrameModeActive && style.isActive}`}>
          <Icon type="cast" handleClick={() => {
            dispatch(openFrameView());
            if (isFileInfo) {
              dispatch(openFileModeView());
            }
          }} />
        </Link>
      </Fragment>
      <MinimizedFiles />
    </footer>
  );
}

export default Footer;
