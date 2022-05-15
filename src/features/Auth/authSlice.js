import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signupService } from "../../services/authServices";

export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async ({ username, password }, { rejectWithValue }) => {
		try {
			const response = await loginService(username, password);

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const signupUser = createAsyncThunk(
	"auth/signupUser",
	async (formVal, { rejectWithValue }) => {
		try {
			const response = await signupService(formVal);

			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const initialState = {
	token: "" || JSON.parse(localStorage.getItem("tokenASM")),
	user: null || JSON.parse(localStorage.getItem("AsimovWUser")),
	authStatus: "idle",
	authError: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			state.token = "";
			state.user = null;
		},
	},
	extraReducers: {
		[loginUser.pending]: (state) => {
			state.authStatus = "loading";
		},

		[loginUser.fulfilled]: (state, { payload }) => {
			state.user = payload.foundUser;
			state.token = payload.encodedToken;
			state.authStatus = "success";
			localStorage.setItem("tokenASM", JSON.stringify(payload.encodedToken));
			localStorage.setItem("AsimovWUser", JSON.stringify(payload.foundUser));
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.authStatus = "rejected";
			state.authError = payload.errors;
		},
		[signupUser.pending]: (state) => {
			state.authStatus = "loading";
		},

		[signupUser.fulfilled]: (state, { payload }) => {
			console.log("signed up");
			console.log(payload);
			state.user = payload.createdUser;
			state.token = payload.encodedToken;
			state.authStatus = "success";
			localStorage.setItem("tokenASM", JSON.stringify(payload.encodedToken));
			localStorage.setItem("AsimovWUser", JSON.stringify(payload.createdUser));
		},
		[signupUser.rejected]: (state, { payload }) => {
			state.authStatus = "rejected";
			state.authError = payload.errors;
		},
	},
});
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
