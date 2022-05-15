import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer, usersReducer } from "./features";
export const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postReducer,
		users: usersReducer,
	},
});
