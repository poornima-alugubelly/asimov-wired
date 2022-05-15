import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	followUserService,
	getUserService,
	unfollowUserService,
	updateUserService,
	getUserPostService,
	getAllUserService,
} from "../../services/userServices";

import { useSelector } from "react-redux";

export const getAllUsers = createAsyncThunk(
	"users/getAllUsers",
	async (_, { rejectWithValue }) => {
		try {
			const res = await getAllUserService();
			return res.data;
		} catch (err) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const getUser = createAsyncThunk(
	"users/getUser",
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
	"users/getUserPost",
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
	"users/followUser",
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
	"users/unfollowUser",
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
	"users/updatePost",
	async ({ formVal: userData, token }, { rejectWithValue }) => {
		try {
			const response = await updateUserService(userData, token);
			return response.data.user;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
const initialState = {
	userToDisplay: null,
	userPosts: [],
	allUsers: [],
};
const usersSlice = createSlice({
	name: "users",
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
			state.allUsers = state.allUsers.map((user) =>
				user.username === payload.username ? payload : user
			);
			state.userToDisplay = payload;
		},
		[updateUser.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[followUser.fulfilled]: (state, { payload }) => {
			const { user, followUser } = payload;
			state.allUsers = state.allUsers.map((currUser) =>
				currUser.username === user.username ? user : currUser
			);
			state.allUsers = state.allUsers.map((currUser) =>
				currUser.username === followUser.username ? followUser : currUser
			);
			state.userToDisplay = payload.followUser;
		},
		[followUser.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[unfollowUser.fulfilled]: (state, { payload }) => {
			const { user, followUser } = payload;
			state.allUsers = state.allUsers.map((currUser) =>
				currUser.username === user.username ? user : currUser
			);
			state.allUsers = state.allUsers.map((currUser) =>
				currUser.username === followUser.username ? followUser : currUser
			);
			state.userToDisplay = payload.followUser;
		},
		[unfollowUser.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[getAllUsers.fulfilled]: (state, { payload }) => {
			console.log("here");
			state.allUsers = payload.users;
		},
		[getAllUsers.rejected]: (state, { payload }) => {
			console.log(payload);
		},
	},
});

export const usersReducer = usersSlice.reducer;
export const { resetProfile } = usersSlice.actions;
export const useProfile = () => useSelector((state) => state.users);
