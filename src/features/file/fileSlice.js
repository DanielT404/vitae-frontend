import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const fileSlice = createSlice({
    name: 'file',
    initialState: {
        viewFileMode: false,
        fileInfo: {},
        minimizedFiles: [],
    },
    reducers: {
        openFileModeView: (state) => {
            state.viewFileMode = true
        },
        closeFileModeView: (state) => {
            state.viewFileMode = false
        },
        updateFileInfo: (state, action) => {
            console.log(action)
            state.fileInfo = { ...action.payload }
        },
        clearFileInfo: (state) => {
            state.fileInfo = {}
        },
        addMinimizedFile: (state, action) => {
            const isMinimizedFileAlready = !!state.minimizedFiles.filter(
                (file) => file.Key === action.payload.Key
            ).length
            if (!isMinimizedFileAlready) {
                state.minimizedFiles.push({ ...action.payload })
            } else {
                const isMinimized = state.fileInfo?.isMinimized ?? -1
                if (isMinimized !== -1) {
                    // change file identifier if the file is opened multiple times
                    let obj = Object.assign({}, action.payload)
                    obj.Id = uuidv4()
                    state.minimizedFiles.push(obj)
                }
            }
        },
        closeMinimizedFile: (state, action) => {
            state.minimizedFiles = state.minimizedFiles.filter(
                (file) => file.id !== action.payload.id
            )
        },
        toggleOnMinimizedHover: (state, action) => {
            const arr = state.minimizedFiles
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
    toggleOnMinimizedHover,
} = fileSlice.actions
export default fileSlice.reducer
