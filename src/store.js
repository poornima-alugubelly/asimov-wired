import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer, userProfileReducer } from "./features";
export const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postReducer,
		userProfile: userProfileReducer,
	},
});
