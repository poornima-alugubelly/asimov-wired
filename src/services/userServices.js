import axios from "axios";

export const getUserService = async (username) => {
	return await axios.get(`/api/users/${username}`);
};

export const getUserPostService = async (username) => {
	return await axios.get(`/api/posts/user/${username}`);
};

export const updateUserService = async (userData, token) => {
	console.log(userData, token);
	return await axios.post(
		"/api/users/edit",
		{ userData },
		{ headers: { authorization: token } }
	);
};
