import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import userSlice from "./reducers/userSlice";
import postSliceReducer from "./reducers/postSlice";
export const store = configureStore({
	reducer: { auth: authReducer, posts: postSliceReducer },
});
