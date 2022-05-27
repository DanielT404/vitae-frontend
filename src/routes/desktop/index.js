import { h, Fragment } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useSelector, useDispatch } from 'react-redux';

import { setFiles } from '../../features/file/fileSlice';
import fetchFiles from '../../utils/functions/fetchFiles';

import WindowFrame from '../../components/file/window';
import File from '../../components/file';

import style from './style.css';

const Desktop = () => {
  const isViewFileMode = useSelector((state) => state.file.viewFileMode);
  let fileArr = useSelector((state) => state.file.files);

  const dispatch = useDispatch();
  const getFiles = useCallback(async () => {
    const files = await fetchFiles();
    dispatch(setFiles(files));
  }, []);

  useEffect(() => {
    getFiles().catch(() => dispatch(setFiles([])));
  }, [getFiles]);

  return (
    <Fragment>
      <div class={`${style.desktopContent} ${style.windowsBackground}`}>
        {isViewFileMode && <WindowFrame />}
        {fileArr?.success &&
          fileArr.files.map((file) => <File key={file.Id} data={file} />)}
      </div>
    </Fragment>
  );
};

export default Desktop;
