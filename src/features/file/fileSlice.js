import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const fileSlice = createSlice({
  name: 'file',
  initialState: {
    viewFileMode: false,
    fileInfo: {},
    files: [],
    minimizedFiles: []
  },
  reducers: {
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    openFileModeView: (state) => {
      state.viewFileMode = true;
    },
    closeFileModeView: (state) => {
      state.viewFileMode = false;
    },
    updateFileInfo: (state, action) => {
      state.fileInfo = { ...action.payload };
    },
    clearFileInfo: (state) => {
      state.fileInfo = {};
    },
    addMinimizedFile: (state, action) => {
      const isFileMinimizedAlready =
        state.minimizedFiles.filter((file) => file.Id === action.payload.Id)
          .length > 0;
      if (isFileMinimizedAlready) {
        let obj = Object.assign({}, action.payload);
        obj.Id = uuidv4();
        state.minimizedFiles.push(obj);
      } else {
        state.minimizedFiles.push({ ...action.payload });
      }
    },
    closeMinimizedFile: (state, action) => {
      state.minimizedFiles = state.minimizedFiles.filter(
        (file) => file.Id !== action.payload.Id
      );
    },
    triggerFileStatus: (state, action) => {
      const minimizedFiles = state.minimizedFiles;
      for (let idx = 0; idx < minimizedFiles.length; idx++) {
        if (minimizedFiles[idx].Id === action.payload.Id) {
          minimizedFiles[idx].status = action.payload.status;
          break;
        }
      }
    },
    clearActiveFiles: (state) => {
      const minimizedFiles = state.minimizedFiles;
      for (let idx = 0; idx < minimizedFiles.length; idx++) {
        if (minimizedFiles[idx].status == 'active') {
          minimizedFiles[idx].status = 'inactive';
        }
      }
    },
    toggleOnMinimizedHover: (state, action) => {
      const arr = state.minimizedFiles;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].Id === action.payload.Id) {
          arr[i].isOnHover = !arr[i].isOnHover;
          break;
        }
      }
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
  clearActiveFiles
} = fileSlice.actions;
export default fileSlice.reducer;
