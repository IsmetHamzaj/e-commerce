import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./Reducer/auth";

export const store = configureStore({
    reducer: {
        auth: slice.reducer
    }
})