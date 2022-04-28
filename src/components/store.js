import { configureStore } from '@reduxjs/toolkit'
import frameReducer from '/features/frame/frameSlice'
import fileReducer from '/features/file/fileSlice'

export default configureStore({
    reducer: {
        frame: frameReducer,
        file: fileReducer,
    },
})
