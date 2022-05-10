import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getUserPostService,
	getUserService,
	updateUserService,
} from "../../services/userServices";
import { useSelector } from "react-redux";

export const getUser = createAsyncThunk(
	"userProfile/getUser",
	async ({ username }) => {
		try {
			const response = await getUserService(username);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const getUserPost = createAsyncThunk(
	"userProfile/getUserPost",
	async ({ username }) => {
		try {
			const response = await getUserPostService(username);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const updateUser = createAsyncThunk(
	"userProfile/updatePost",
	async ({ formVal: userData, token }) => {
		try {
			const response = await updateUserService(userData, token);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);
const initialState = {
	userToDisplay: null,
	userPosts: [],
};
const userProfileSlice = createSlice({
	name: "userProfile",
	initialState,
	reducers: {
		resetProfile: (state) => {
			state.userToDisplay = null;
			state.userPosts = [];
		},
	},
	extraReducers: {
		[getUser.fulfilled]: (state, { payload }) => {
			state.userToDisplay = payload.user;
		},
		[getUserPost.fulfilled]: (state, { payload }) => {
			state.userPosts = payload.posts;
		},
		[updateUser.fulfilled]: (state, { payload }) => {
			state.userToDisplay = payload.user;
		},
	},
});

export const userProfileReducer = userProfileSlice.reducer;
export const { resetProfile } = userProfileSlice.actions;
export const useProfile = () => useSelector((state) => state.userProfile);
