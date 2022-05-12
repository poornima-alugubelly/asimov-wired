import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	followUserService,
	getUserService,
	unfollowUserService,
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

export const followUser = createAsyncThunk(
	"userProfile/followUser",
	async ({ followUserId, token }) => {
		try {
			const response = await followUserService(followUserId, token);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);
export const unfollowUser = createAsyncThunk(
	"userProfile/unfollowUser",
	async ({ followUserId, token }) => {
		try {
			const response = await unfollowUserService(followUserId, token);
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
		[updateUser.fulfilled]: (state, { payload }) => {
			state.userToDisplay = payload.user;
		},
		[followUser.fulfilled]: (state, { payload }) => {
			state.userToDisplay = payload.followUser;
		},
		[unfollowUser.fulfilled]: (state, { payload }) => {
			state.userToDisplay = payload.followUser;
		},
	},
});

export const userProfileReducer = userProfileSlice.reducer;
export const { resetProfile } = userProfileSlice.actions;
export const useProfile = () => useSelector((state) => state.userProfile);
