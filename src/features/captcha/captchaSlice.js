import { createSlice } from '@reduxjs/toolkit'

export const captchaSlice = createSlice({
    name: 'captcha',
    initialState: {
        token: null,
    },
    reducers: {
        getToken: (state) => {
            return state.token
        },
        updateToken: (state, action) => {
            console.log('calling')
            state.token = action.payload.token
        },
    },
})

export const { getToken, updateToken } = captchaSlice.actions
export default captchaSlice.reducer
