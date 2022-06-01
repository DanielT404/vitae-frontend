import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

import { useSelector, useDispatch } from 'react-redux';
import { toggleOnMinimizedHover } from 'features/file/fileSlice';
import { handleFileMinimizedOpen, handleFileClose } from 'utils/functions/handleFiles';

import useWindowDimensions from 'utils/hooks/useWindowDimensions';
import { SMALL_VIEWPORT_BREAKPOINT } from 'utils/global/constants';

import Icon from '../../material-icon';
import style from './style.css';

function MinimizedFiles() {
  const dispatch = useDispatch();
  const minimizedFiles = useSelector((state) => state.file.minimizedFiles);
  const isViewFrameModeActive = useSelector((state) => state.frame.value);

  const { width } = useWindowDimensions();
  const isOnSmallerViewport = width < SMALL_VIEWPORT_BREAKPOINT;

  return (
    <Fragment>
      {minimizedFiles && (
        <div class={style.minimizedFileWrapper}>
          {minimizedFiles.map((file) => (
            <div class={style.wrappedFile}
              onMouseEnter={() => dispatch(toggleOnMinimizedHover(file))}
              onMouseLeave={() => dispatch(toggleOnMinimizedHover(file))}
              key={file.Id}
            >
              {file.isOnHover && !isOnSmallerViewport && (
                <div class={style.minimizedOverview}>
                  <div class={style.minimizedNav}>
                    <h6 onClick={() => handleFileMinimizedOpen(file, dispatch, isViewFrameModeActive)}>
                      {file.Key}
                    </h6>
                    <Icon
                      type="close"
                      class={`${style.icon} ${style.exitIcon}`}
                      onClick={() => handleFileClose(file, dispatch)}
                    />
                  </div>
                  {file.Type === 'image' && (
                    <img src={file.ResourcePath} style="width: 100%; height: 100%; cursor: pointer;"
                      onClick={() => handleFileMinimizedOpen(file, dispatch, isViewFrameModeActive)}
                    />
                  )}
                  {file.Type === 'text' && (
                    <div style="cursor: pointer;"
                      onClick={() => handleFileMinimizedOpen(file, dispatch, isViewFrameModeActive)}
                    >
                      <p>{file.Contents}</p>
                    </div>
                  )}
                </div>
              )}
              <Link
                class={`${style.icon} ${file.status === 'active' && style.isActive}`}
                onClick={() => handleFileMinimizedOpen(file, dispatch, isViewFrameModeActive)}
              >
                <Icon type={file.MaterialIcon} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default MinimizedFiles;
