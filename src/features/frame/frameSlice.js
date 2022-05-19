import { createSlice } from '@reduxjs/toolkit'

export const frameSlice = createSlice({
    name: 'frame',
    initialState: {
        value: true,
        isNavTreeShown: false
    },
    reducers: {
        toggleFrameView: (state) => {
            state.value = !state.value
        },
        toggleNavTree: (state) => {
            state.isNavTreeShown = !state.isNavTreeShown
        },
        hideNavTree: (state) => {
            state.isNavTreeShown = false;
        },
        showNavTree: (state) => {
            state.isNavTreeShown = true;
        }
    },
})

export const { toggleFrameView, toggleNavTree, hideNavTree, showNavTree } = frameSlice.actions
export default frameSlice.reducer
