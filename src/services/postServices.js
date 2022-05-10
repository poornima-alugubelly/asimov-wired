import axios from "axios";
export const getAllPostService = async () => {
	return await axios.get("/api/posts");
};

export const editPostService = async (token, postId, postData) => {
	return await axios.post(
		`/api/posts/edit/${postId}`,
		{ postData },
		{ headers: { authorization: token } }
	);
};

export const deletePostService = async (token, postId) => {
	return await axios.delete(
		`/api/posts/${postId}`,

		{ headers: { authorization: token } }
	);
};

export const createPostService = async (token, postData) => {
	return await axios.post(
		"/api/posts",
		{ postData },
		{ headers: { authorization: token } }
	);
};

export const likePostService = async (token, postId) => {
	return await axios.post(
		`/api/posts/like/${postId}`,
		{},
		{ headers: { authorization: token } }
	);
};

export const dislikePostService = async (token, postId) => {
	return await axios.post(
		`/api/posts/dislike/${postId}`,
		{},
		{ headers: { authorization: token } }
	);
};

export const getAllBookmarkService = async (token) => {
	return await axios.get(
		"/api/users/bookmark",

		{ headers: { authorization: token } }
	);
};

export const addBookmarkService = async (postId, token) => {
	return await axios.post(
		`/api/users/bookmark/${postId}`,
		{},
		{ headers: { authorization: token } }
	);
};

export const removeBookmarkService = async (postId, token) => {
	return await axios.post(
		`/api/users/remove-bookmark/${postId}`,
		{},
		{ headers: { authorization: token } }
	);
};
