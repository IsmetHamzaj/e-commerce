import { createSlice } from "@reduxjs/toolkit/dist/createSlice";


const initials = {
    IS_LOGGED_IN: false
}

// export const Reducer = (state = {} , action ) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// }

export const slice = createSlice({
    name: 'Ismet',
    initials: initials,
    reducers: {
        login: (state, action) => {
            action.payload
            state.IS_LOGGED_IN = action.payload
        }
    }
})


export const action = reducer.actions