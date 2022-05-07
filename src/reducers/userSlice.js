import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { error: "somethingelse" };
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

export default userSlice.reducer;
