import { createSlice } from '@reduxjs/toolkit'

export const highlightSlice = createSlice({
    name: 'highlight',
    initialState: {
        isActive: false,
        searchText: ''
    },
    reducers: {
        setHighlightState: (state, action) => {
            state.isActive = action.payload.state;
        },
        setSearchText: (state, action) => {
            function sanitizeInput(searchedText: string) : string {
                const parser : Document = new DOMParser().parseFromString(searchedText, 'text/html');
                return parser.body.textContent || "";
            }
            state.searchText = sanitizeInput(action.payload.searchText);
        }
    },
})

export const { setHighlightState, setSearchText } =
    highlightSlice.actions
export default highlightSlice.reducer
