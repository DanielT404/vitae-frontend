import { toggleFrameView } from 'features/frame/frameSlice';
import {
  openFileModeView,
  closeFileModeView,
  clearActiveFiles,
  triggerFileStatus,
  updateFileInfo,
  clearFileInfo,
  closeMinimizedFile
} from 'features/file/fileSlice';

const handleFileOpen = (file, dispatch, isViewFrameModeActive) => {
  if (!isViewFrameModeActive) dispatch(toggleFrameView());
  dispatch(openFileModeView());
  dispatch(updateFileInfo({ ...file }));
  dispatch(clearActiveFiles());
  dispatch(triggerFileStatus({ ...file, status: 'active' }));
};

const handleFileClose = (file, dispatch) => {
  dispatch(clearActiveFiles());
  dispatch(closeFileModeView());
  dispatch(closeMinimizedFile(file));
  dispatch(clearFileInfo());
};

const handleFileMinimize = (file, dispatch) => {
  dispatch(
    triggerFileStatus({
      ...file,
      status: 'inactive'
    })
  );
  dispatch(closeFileModeView());
  dispatch(clearActiveFiles());
};

export { handleFileOpen, handleFileMinimize, handleFileClose };
