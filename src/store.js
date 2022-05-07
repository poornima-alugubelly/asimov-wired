import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import userSlice from "./reducers/userSlice";
export const store = configureStore({
	reducer: { auth: authReducer, user: userSlice },
});
