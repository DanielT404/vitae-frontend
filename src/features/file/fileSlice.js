import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fileSlice = createSlice({
    name: 'file',
    initialState: {
        viewFileMode: false,
        fileInfo: {},
        files: [],
        minimizedFiles: [],
    },
    reducers: {
        openFileModeView: (state) => {
            state.viewFileMode = true
        },
        closeFileModeView: (state) => {
            state.viewFileMode = false
        },
        setFiles: (state, action) => {
            state.files = action.payload
        },
        updateFileInfo: (state, action) => {
            console.log(action)
            state.fileInfo = { ...action.payload }
        },
        clearFileInfo: (state) => {
            state.fileInfo = {}
        },
        addMinimizedFile: (state, action) => {
            const isMinimized = state.fileInfo.isMinimized;
            console.log(isMinimized)
            if(!isMinimized) {
                let obj = Object.assign({}, action.payload)
                obj.Id = uuidv4()
                state.minimizedFiles.push(obj)
            }
        },
        closeMinimizedFile: (state, action) => {
            state.minimizedFiles = state.minimizedFiles.filter(
                (file) => file.Id !== action.payload.Id
            )
        },
        toggleOnMinimizedHover: (state, action) => {
            const arr = state.minimizedFiles
            console.log(arr);
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].Id === action.payload.Id) {
                    arr[i].isOnHover = !arr[i].isOnHover
                    break
                }
            }
        },
    },
})

export const {
    openFileModeView,
    closeFileModeView,
    updateFileInfo,
    clearFileInfo,
    addMinimizedFile,
    closeMinimizedFile,
    setFiles,
    toggleOnMinimizedHover,
} = fileSlice.actions
export default fileSlice.reducer
