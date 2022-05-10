import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
	getAllPostService,
	editPostService,
	deletePostService,
	createPostService,
	likePostService,
	dislikePostService,
} from "../../services/postServices";
import {
	getAllBookmarkService,
	addBookmarkService,
	removeBookmarkService,
} from "../../services/postServices";

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
	async ({ token, postData }) => {
		try {
			const response = await createPostService(token, postData);
			console.log(response.data.posts);
			return response.data.posts;
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

export const likePost = createAsyncThunk(
	"posts/likePost",
	async ({ token, postId }) => {
		try {
			const response = await likePostService(token, postId);

			return response.data.posts;
		} catch (error) {
			console.log(error.response);
		}
	}
);

export const dislikePost = createAsyncThunk(
	"posts/dislikePost",
	async ({ token, postId }) => {
		try {
			const response = await dislikePostService(token, postId);

			return response.data.posts;
		} catch (error) {
			console.log(error.response);
		}
	}
);

export const getBookmarks = createAsyncThunk(
	"posts/getBookmarks",
	async ({ token }) => {
		try {
			const response = await getAllBookmarkService(token);
			return response.data;
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

export const addBookmark = createAsyncThunk(
	"posts/addBookmark",
	async ({ token, postId }) => {
		try {
			const response = await addBookmarkService(postId, token);
			return response.data;
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

export const removeBookmark = createAsyncThunk(
	"posts/removeBookmark",
	async ({ token, postId }) => {
		try {
			const response = await removeBookmarkService(postId, token);
			return response.data;
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

const initialState = {
	userPosts: [],
	allPosts: [],
	bookmarkedPosts: [],
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
		[likePost.fulfilled]: (state, { payload }) => {
			toast.success("Liked Post!");
			state.allPosts = payload;
		},
		[dislikePost.fulfilled]: (state, { payload }) => {
			state.allPosts = payload;
		},
		[getBookmarks.fulfilled]: (state, { payload }) => {
			state.bookmarkedPosts = payload.bookmarks;
		},
		[addBookmark.fulfilled]: (state, { payload }) => {
			toast.success("Bookmarked post!");
			state.bookmarkedPosts = payload.bookmarks;
		},
		[removeBookmark.fulfilled]: (state, { payload }) => {
			toast.success("Removed bookmark!");
			state.bookmarkedPosts = payload.bookmarks;
		},
	},
});

export const postReducer = postSlice.reducer;
