import { openFrameView } from 'features/frame/frameSlice';
import {
  openFileModeView,
  addMinimizedFile,
  closeFileModeView,
  clearPreviousActiveFile,
  triggerFileStatus,
  updateFileInfo,
  clearFileInfo,
  closeMinimizedFile,
  enqueueMinimizedActiveFileIdx,
  resetMinimizedActiveFileQueue
} from 'features/file/fileSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { IFile, EStatus } from 'utils/interfaces/files/file.interface';


const handleFileOpen = (file: IFile, dispatch: Dispatch<AnyAction>, isViewFrameModeActive: boolean, minimizedFileIdx: number) => {
  if (!isViewFrameModeActive) dispatch(openFrameView());
  dispatch(openFileModeView());
  dispatch(enqueueMinimizedActiveFileIdx(minimizedFileIdx));
  dispatch(addMinimizedFile({ ...file, Status: EStatus.Active }));
  dispatch(clearPreviousActiveFile());
  dispatch(updateFileInfo({ ...file }));
};

const handleFileMinimizedOpen = (file: IFile, dispatch: Dispatch<AnyAction>, isViewFrameModeActive: boolean) => {
  if (!isViewFrameModeActive) dispatch(openFrameView());
  dispatch(openFileModeView());
  dispatch(updateFileInfo({ ...file }));
  dispatch(enqueueMinimizedActiveFileIdx((file.Idx as number)));
  dispatch(clearPreviousActiveFile());
  dispatch(triggerFileStatus({ ...file, Status: EStatus.Active }));;
}

const handleFileClose = (file: IFile, dispatch: Dispatch<AnyAction>) => {
  dispatch(clearPreviousActiveFile());
  dispatch(resetMinimizedActiveFileQueue());
  dispatch(closeFileModeView());
  dispatch(closeMinimizedFile(file));
  dispatch(clearFileInfo());
};

const handleFileMinimize = (file: IFile, dispatch: Dispatch<AnyAction>, minimizedFileIdx: number) => {
  dispatch(enqueueMinimizedActiveFileIdx(minimizedFileIdx));
  dispatch(clearFileInfo());
  dispatch(
    triggerFileStatus({
      ...file,
      Status: EStatus.Inactive
    })
  );
  dispatch(closeFileModeView());
  dispatch(clearPreviousActiveFile());
};

export { handleFileOpen, handleFileMinimizedOpen, handleFileMinimize, handleFileClose };
