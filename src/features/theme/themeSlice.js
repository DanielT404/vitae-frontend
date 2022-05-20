import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'dark',
    },
    reducers: {
        toggleThemeMode: (state) => {
            state.value = state.value == 'dark' ? 'light' : 'dark'
        },
    },
})

export const { toggleThemeMode } = themeSlice.actions
export default themeSlice.reducer
