import { checkUserPresent } from "./checkUserPresent";

export const getUserFeed = (postsList, followersList, username) => {
	return postsList.filter(
		(post) =>
			checkUserPresent(post.username, followersList) ||
			post.username === username
	);
};
