import { createSlice } from '@reduxjs/toolkit'

export const frameSlice = createSlice({
    name: 'frame',
    initialState: {
        value: true,
    },
    reducers: {
        toggleFrameView: (state) => {
            state.value = !state.value
        },
    },
})

export const { toggleFrameView } = frameSlice.actions
export default frameSlice.reducer
