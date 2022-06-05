import { createSlice } from '@reduxjs/toolkit';

export const frameSlice = createSlice({
  name: 'frame',
  initialState: {
    value: true,
    is404Page: false,
    isNavTreeShown: false
  },
  reducers: {
    openFrameView: (state) => {
      state.value = true;
    },
    closeFrameView: (state) => {
      state.value = false;
    },
    set404Page: (state, action) => {
      state.is404Page = action.payload.is404PageActive
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

export const { openFrameView, closeFrameView, set404Page, toggleNavTree, hideNavTree, showNavTree } =
  frameSlice.actions;
export default frameSlice.reducer;
