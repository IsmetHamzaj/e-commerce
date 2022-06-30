import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initials = {
    IS_LOGGED_IN: false
}

export const reducer = createSlice({
    name: 'Ismet',
    initials: initials,
    reducers: {
        login: (state, action) => {
            action.payload
            state.IS_LOGGED_IN = action.payload
        }
    }
})