import { configureStore } from "@reduxjs/toolkit";
// import { Reducer } from "./Reducer/Reducer";
import Reducer from "./Reducer/Reducer";


export const store = configureStore({
    reducer: {
        dummy: Reducer,
    }

    // reducer: {
    //     reducer: Reducer.reducer
    // }
})