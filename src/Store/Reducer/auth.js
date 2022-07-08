import { createSlice } from "@reduxjs/toolkit";


const initials = {
    IS_LOGGED_IN: false,
    products: []
}

// export const Reducer = (state = {} , action ) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// }

export const slice = createSlice({
    name: 'Ismet',
    initialState: initials,
    reducers: {
        login: (state, action) => {
            state.IS_LOGGED_IN = action.payload
        },
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        deleteProduct: (state, action) => {
            state.products.splice(action.payload, 1)
        }
    }
})


export const action = slice.actions