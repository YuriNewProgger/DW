import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import carReducer from "./carSlice";
import adminReducer from "./adminPanelSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        car: carReducer,
        admin: adminReducer
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});