import { createSlice } from '@reduxjs/toolkit'

export const captchaSlice = createSlice({
    name: 'captcha',
    initialState: {
        token: null,
        hasSubmitted: false,
    },
    reducers: {
        getToken: (state) => {
            return state.token
        },
        hasSubmitted: (state) => {
            return state.hasSubmitted
        },
        updateToken: (state, action) => {
            state.token = action.payload.token
        },
        updateCaptchaSubmit: (state, action) => {
            state.hasSubmitted = action.payload.hasSubmitted
        },
    },
})

export const { getToken, hasSubmitted, updateToken, updateCaptchaSubmit } =
    captchaSlice.actions
export default captchaSlice.reducer
