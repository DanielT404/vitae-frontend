import { createSlice } from '@reduxjs/toolkit';

export const frameSlice = createSlice({
  name: 'frame',
  initialState: {
    value: true,
    isNavTreeShown: false
  },
  reducers: {
    openFrameView: (state) => {
      state.value = true;
    },
    closeFrameView: (state) => {
      state.value = false;
    },
    toggleNavTree: (state) => {
      state.isNavTreeShown = !state.isNavTreeShown;
    },
    hideNavTree: (state) => {
      state.isNavTreeShown = false;
    },
    showNavTree: (state) => {
      state.isNavTreeShown = true;
    }
  }
});

export const { openFrameView, closeFrameView, toggleNavTree, hideNavTree, showNavTree } =
  frameSlice.actions;
export default frameSlice.reducer;
