import { h, Fragment } from 'preact';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'preact-router';

import { openFrameView, closeFrameView } from 'features/frame/frameSlice';
import { clearActiveFiles, clearFileInfo, closeFileModeView } from 'features/file/fileSlice';
import { updateToken } from 'features/captcha/captchaSlice';

import Icon from 'components/material-icon';
import MinimizedFiles from 'components/file/minimized';

import style from './style.css';

function Footer() {
  const dispatch = useDispatch();
  const isViewFrameModeActive = useSelector((state) => state.frame.value);
  return (
    <footer class={style.footer}>
      <Fragment>
        <Link class={`${style.icon} ${!isViewFrameModeActive && style.isActive}`}>
          <Icon type="explore" onClick={() => {
            dispatch(updateToken({ token: null }))
            dispatch(closeFrameView())
            dispatch(clearActiveFiles());
            dispatch(clearFileInfo());
            dispatch(closeFileModeView());
          }
          } />
        </Link>
        <Link class={`${style.icon} ${isViewFrameModeActive && style.isActive}`}>
          <Icon type="cast" onClick={() => dispatch(openFrameView())} />
        </Link>
      </Fragment>
      <MinimizedFiles />
    </footer>
  );
}

export default Footer;
