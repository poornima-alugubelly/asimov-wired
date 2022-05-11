import { configureStore } from "@reduxjs/toolkit";
import {
	authReducer,
	postReducer,
	userProfileReducer,
	userReducer,
} from "./features";
export const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postReducer,
		userProfile: userProfileReducer,
		users: userReducer,
	},
});
