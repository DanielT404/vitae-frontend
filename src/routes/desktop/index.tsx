import { h, Fragment } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';
import { useSelector, useDispatch } from 'react-redux';

import { GET_FILES_API_ROUTE } from 'utils/global/constants';
import { get } from 'utils/functions/handleData';

import { setFiles } from 'features/file/fileSlice';

import File from 'components/file';
import WindowFrame from 'components/file/window';

import style from './style.css';

import { RootState } from 'components/store';
import { IFiles } from 'utils/interfaces/files/files.interface';

const Desktop = () => {
  const isViewFileMode = useSelector((state: RootState) => state.file.viewFileMode);
  const fileArr: IFiles = useSelector((state: RootState) => state.file.files);
  const dispatch = useDispatch();

  const getFiles = useCallback(async () => {
    let files = await get(GET_FILES_API_ROUTE);
    files.data = JSON.parse(files.data);
    dispatch(setFiles(files));
  }, []);
  useEffect(() => {
    getFiles().catch((err) => {
      throw new Error(err);
    });
  }, []);

  return (
    <Fragment>
      <div class={`${style.desktopContent} ${style.windowsBackground}`}>
        {isViewFileMode && <WindowFrame />}
        {fileArr.success &&
          fileArr?.data?.map((file) => <File key={file.Id} data={file} />)}
      </div>
    </Fragment>
  );
};

export default Desktop;
