import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import carReducer from "./carSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        car: carReducer
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});