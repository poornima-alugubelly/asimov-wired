import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserService } from "../../services/userServices";

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
		[getAllUserService.rejected]: (state, { payload }) => {
			console.log(payload);
		},
	},
});

export const userReducer = userSlice.reducer;
