import axios from "axios";

export const getAllUserService = async () => {
	return await axios.get("/api/users");
};
export const getUserService = async (username) => {
	return await axios.get(`/api/users/${username}`);
};

export const updateUserService = async (userData, token) => {
	return await axios.post(
		"/api/users/edit",
		{ userData },
		{ headers: { authorization: token } }
	);
};

export const followUserService = async (followUserId, token) => {
	return await axios.post(
		`/api/users/follow/${followUserId}`,
		{},
		{ headers: { authorization: token } }
	);
};

export const unfollowUserService = async (followUserId, token) => {
	return await axios.post(
		`/api/users/unfollow/${followUserId}`,
		{},
		{ headers: { authorization: token } }
	);
};
