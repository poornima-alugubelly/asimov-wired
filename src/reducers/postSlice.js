import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
	getAllPostService,
	editPostService,
	deletePostService,
	createPostService,
} from "../services/postServices";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
	try {
		const response = await getAllPostService();
		return response.data.posts;
	} catch (error) {
		console.log(error.response.data);
	}
});

export const editPost = createAsyncThunk(
	"posts/editPost",
	async ({ token, postId, postData }) => {
		try {
			const response = await editPostService(token, postId, postData);
			return response.data.posts;
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

export const deletePost = createAsyncThunk(
	"posts/deletePost",
	async ({ token, postId }) => {
		try {
			const response = await deletePostService(token, postId);
			return response.data.posts;
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

export const createPost = createAsyncThunk(
	"posts/createPost",
	async ({ token, content }) => {
		try {
			const response = await createPostService(token, content);
			return response.data.posts;
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

const initialState = {
	userPosts: [],
	allPosts: [],
};

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: {
		[getPosts.fulfilled]: (state, { payload }) => {
			state.allPosts = payload;
		},
		[editPost.fulfilled]: (state, { payload }) => {
			toast.success("Post updated successfully!");
			state.allPosts = payload;
		},
		[deletePost.fulfilled]: (state, { payload }) => {
			toast.success("Post deleted successfully!");
			state.allPosts = payload;
		},
		[createPost.fulfilled]: (state, { payload }) => {
			toast.success("Post created successfully!");
			state.allPosts = payload;
		},
	},
});

export default postSlice.reducer;
