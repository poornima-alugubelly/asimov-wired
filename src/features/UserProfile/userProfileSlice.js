import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	followUserService,
	getUserService,
	unfollowUserService,
	updateUserService,
	getUserPostService,
} from "../../services/userServices";
import { useSelector } from "react-redux";

export const getUser = createAsyncThunk(
	"userProfile/getUser",
	async ({ username }, { rejectWithValue }) => {
		try {
			const response = await getUserService(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getUserPost = createAsyncThunk(
	"userProfile/getUserPost",
	async ({ username }, { rejectWithValue }) => {
		try {
			const response = await getUserPostService(username);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const followUser = createAsyncThunk(
	"userProfile/followUser",
	async ({ followUserId, token }, { rejectWithValue }) => {
		try {
			const response = await followUserService(followUserId, token);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
export const unfollowUser = createAsyncThunk(
	"userProfile/unfollowUser",
	async ({ followUserId, token }, { rejectWithValue }) => {
		try {
			const response = await unfollowUserService(followUserId, token);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const updateUser = createAsyncThunk(
	"userProfile/updatePost",
	async ({ formVal: userData, token }, { rejectWithValue }) => {
		try {
			const response = await updateUserService(userData, token);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
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
		[getUser.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[getUserPost.fulfilled]: (state, { payload }) => {
			state.userPosts = payload.posts;
		},
		[getUserPost.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[updateUser.fulfilled]: (state, { payload }) => {
			state.userToDisplay = payload.user;
		},
		[updateUser.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[followUser.fulfilled]: (state, { payload }) => {
			state.userToDisplay = payload.followUser;
		},
		[followUser.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[unfollowUser.fulfilled]: (state, { payload }) => {
			state.userToDisplay = payload.followUser;
		},
		[unfollowUser.rejected]: (state, { payload }) => {
			console.log(payload);
		},
	},
});

export const userProfileReducer = userProfileSlice.reducer;
export const { resetProfile } = userProfileSlice.actions;
export const useProfile = () => useSelector((state) => state.userProfile);
