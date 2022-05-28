import { h, Fragment } from 'preact';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'preact-router';

import { toggleFrameView } from 'features/frame/frameSlice';

import Icon from 'components/material-icon';
import MinimizedFiles from 'components/file/minimized';

import style from './style.css';

function Footer() {
  const dispatch = useDispatch();
  const isViewFrameModeActive = useSelector((state) => state.frame.value);
  return (
    <footer class={style.footer}>
      <Fragment>
        <Link
          class={`${style.icon} ${!isViewFrameModeActive && style.isActive}`}
        >
          <Icon type="explore" />
        </Link>
        <Link
          class={`${style.icon} ${isViewFrameModeActive && style.isActive}`}
        >
          <Icon
            type="cast"
            onClick={() =>
              !isViewFrameModeActive && dispatch(toggleFrameView())
            }
          />
        </Link>
      </Fragment>
      <MinimizedFiles />
    </footer>
  );
}

export default Footer;
