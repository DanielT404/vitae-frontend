import { configureStore } from '@reduxjs/toolkit'
import frameReducer from '../features/frame/frameSlice'
import fileReducer from '../features/file/fileSlice'
import captchaReducer from '../features/captcha/captchaSlice'

export default configureStore({
    reducer: {
        frame: frameReducer,
        file: fileReducer,
        captcha: captchaReducer,
    },
})
