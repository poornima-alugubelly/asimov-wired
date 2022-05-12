export const getSearchedUsers = (usersList, userInput) => {
	const re = new RegExp(`${userInput}`, "i");
	return usersList.filter(
		(user) => re.test(user.username) || re.test(user.firstName + user.lastName)
	);
};
