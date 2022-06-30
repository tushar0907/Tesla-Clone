import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice.jsx";

export const store = configureStore({
    reducer: {
        car: carReducer,
    },
});