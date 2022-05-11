import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserService } from "../../services/userServices";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
	try {
		const res = await getAllUserService();
		return res.data;
	} catch (err) {
		console.log(err);
	}
});

const initialState = {
	allUsers: [],
};
const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: {
		[getAllUsers.fulfilled]: (state, { payload }) => {
			state.allUsers = payload.users;
		},
	},
});

export const userReducer = userSlice.reducer;
