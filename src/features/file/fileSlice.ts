import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { EStatus, IFile } from 'utils/interfaces/files/file.interface'
import { IFiles } from 'utils/interfaces/files/files.interface'

type FileState = { 
  viewFileMode: boolean, 
  files: IFiles,
  fileInfo: IFile | {}, 
  minimizedFiles: IFile[] | [],
  minimizedActiveFilesIdxQueue: [prevMinimizedFileIdx : number | undefined , currMinimizedFileIdx? : number]
};

const initialState: FileState = { 
  viewFileMode: false,
  fileInfo: {},
  files: {
    success: false,
    data: []
  },
  minimizedFiles: [],
  minimizedActiveFilesIdxQueue: [undefined]
}

export const fileSlice = createSlice({
  name: 'file',
  initialState: initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<IFiles>) => {
      state.files = action.payload;
    },
    openFileModeView: (state) => {
      state.viewFileMode = true;
    },
    closeFileModeView: (state) => {
      state.viewFileMode = false;
    },
    updateFileInfo: (state, action: PayloadAction<IFile>) => {
      state.fileInfo = action.payload;
    },
    clearFileInfo: (state) => {
      state.fileInfo = {};
    },
    addMinimizedFile: (state, action: PayloadAction<IFile>) => {
      let minimizedFiles : IFile[] = state.minimizedFiles;
      const isFileMinimizedAlready = minimizedFiles.filter((file) => file.Id === action.payload.Id).length > 0;
      if (isFileMinimizedAlready) {
        let obj : IFile = Object.assign({}, action.payload);
        obj.Id = uuidv4();
        minimizedFiles.push(obj);
      } else {
        minimizedFiles.push(action.payload);
      }
    },
    closeMinimizedFile: (state, action) => {
      let minimizedFiles : IFile[] = state.minimizedFiles;
      state.minimizedFiles = minimizedFiles.filter((file) => file.Id !== action.payload.Id);
    },
    triggerFileStatus: (state, action: PayloadAction<IFile>) => {
      const minimizedFileIdx = action.payload?.Idx;
      const lastMinimizedFileIdx : number = state.minimizedFiles.length - 1;
      state.minimizedFiles[minimizedFileIdx ?? lastMinimizedFileIdx].Status = action.payload.Status;
    },
    enqueueMinimizedActiveFileIdx: (state, action: PayloadAction<number>) => {
      state.minimizedActiveFilesIdxQueue.push(action.payload);
    },
    resetMinimizedActiveFileQueue: (state) => {
      state.minimizedActiveFilesIdxQueue = [undefined];
    },
    clearPreviousActiveFile: (state) => {
      let previousActiveFileIdx : number | undefined = state.minimizedActiveFilesIdxQueue[0];
      if(previousActiveFileIdx === undefined) {
        state.minimizedActiveFilesIdxQueue.shift();
      } else {
        previousActiveFileIdx = state.minimizedActiveFilesIdxQueue.shift();
        state.minimizedFiles[previousActiveFileIdx as number].Status = EStatus.Inactive;
      }
    },
    toggleOnMinimizedHover: (state, action) => {
      const minimizedFileIdx : number = action.payload;
      state.minimizedFiles[minimizedFileIdx].IsOnHover = !state.minimizedFiles[minimizedFileIdx].IsOnHover;
    }
  }
});

export const {
  openFileModeView,
  closeFileModeView,
  updateFileInfo,
  clearFileInfo,
  addMinimizedFile,
  closeMinimizedFile,
  setFiles,
  toggleOnMinimizedHover,
  triggerFileStatus,
  clearPreviousActiveFile,
  enqueueMinimizedActiveFileIdx,
  resetMinimizedActiveFileQueue
} = fileSlice.actions;
export default fileSlice.reducer;
