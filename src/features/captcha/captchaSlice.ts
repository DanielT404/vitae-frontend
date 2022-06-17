import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CaptchaState = { token: string , hasSubmitted: boolean }
const initialState: CaptchaState = { token: '', hasSubmitted: false }

export const captchaSlice = createSlice({
    name: 'captcha',
    initialState: initialState,
    reducers: {
        updateToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        updateCaptchaSubmit: (state, action: PayloadAction<boolean>) => {
            state.hasSubmitted = action.payload;
        },
    },
})
export type { CaptchaState };
export const { updateToken, updateCaptchaSubmit } =
    captchaSlice.actions
export default captchaSlice.reducer
