import axios from "axios";

export const loginService = async (username, password) => {
	return await axios.post("/api/auth/login", {
		username,
		password,
	});
};

export const signupService = async (formVal) => {
	return await axios.post("/api/auth/signup", {
		...formVal,
	});
};
