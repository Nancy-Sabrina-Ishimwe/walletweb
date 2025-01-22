import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/Auth/AuthSlice";
import signupReducer from "../features/Auth/SignupSlice"; // Import the signup reducer

const store = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer, // Include signup reducer
    },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
