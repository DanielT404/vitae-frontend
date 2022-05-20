import { configureStore } from '@reduxjs/toolkit'
import frameReducer from '../features/frame/frameSlice'
import fileReducer from '../features/file/fileSlice'
import themeReducer from '../features/theme/themeSlice'

export default configureStore({
    reducer: {
        frame: frameReducer,
        file: fileReducer,
        theme: themeReducer,
    },
})
