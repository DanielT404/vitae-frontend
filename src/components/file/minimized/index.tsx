import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'components/store';
import { EStatus, IFile } from 'utils/interfaces/files/file.interface';

import { toggleOnMinimizedHover } from 'features/file/fileSlice';
import { handleFileMinimizedOpen, handleFileClose } from 'utils/functions/handleFiles';

import useWindowDimensions from 'utils/hooks/useWindowDimensions';
import { SMALL_VIEWPORT_BREAKPOINT } from 'utils/global/constants';

import Icon from '../../material-icon';
import style from './style.css';

function MinimizedFiles() {
  const dispatch = useDispatch();
  const minimizedFiles = useSelector((state: RootState) => state.file.minimizedFiles);
  const isViewFrameModeActive = useSelector((state: RootState) => state.frame.value);

  const { width } = useWindowDimensions();
  const isOnSmallerViewport = width < SMALL_VIEWPORT_BREAKPOINT;

  return (
    <Fragment>
      {minimizedFiles && (
        <div class={style.minimizedFileWrapper}>
          {minimizedFiles.map(( file, idx) => (
            <div class={style.wrappedFile}
              onMouseEnter={() => dispatch(toggleOnMinimizedHover(idx))}
              onMouseLeave={() => dispatch(toggleOnMinimizedHover(idx))}
              key={file.Id}
            >
              {file.IsOnHover && !isOnSmallerViewport && (
                <div class={style.minimizedOverview}>
                  <div class={style.minimizedNav}>
                    <h6 onClick={() => {
                      handleFileMinimizedOpen({...file, Idx: idx}, dispatch, isViewFrameModeActive)
                    }}>
                      {file.Key}
                    </h6>
                    <Icon
                      type="close"
                      class={`${style.icon} ${style.exitIcon}`}
                      handleClick={() => {
                        handleFileClose(file, dispatch)
                      }}
                    />
                  </div>
                  {file.Type === 'image' && (
                    <div class={style.minimizedImageWrapper}>
                      <img src={file.ResourcePath} class={style.minimizedImage}
                        onClick={() => {
                          handleFileMinimizedOpen({...file, Idx: idx}, dispatch, isViewFrameModeActive)
                        }}
                      />
                    </div>
                  )}
                  {file.Type === 'text' && (
                    <div class={style.minimizedText}
                      onClick={() => {
                        handleFileMinimizedOpen({...file, Idx: idx}, dispatch, isViewFrameModeActive)
                      }}
                    >
                      <p>{file.Contents}</p>
                    </div>
                  )}
                </div>
              )}
              <Link
                class={`${style.icon} ${file.Status === EStatus.Active && style.isActive}`}
                onClick={() => {
                  handleFileMinimizedOpen({...file, Idx: idx}, dispatch, isViewFrameModeActive)
                }}
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
