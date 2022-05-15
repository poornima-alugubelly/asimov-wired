import { checkUserPresent } from "./checkUserPresent";

export const getUserFeed = (postsList, followersList, username) => {
	if (followersList.lenth === 0) return postsList;
	return postsList.filter(
		(post) =>
			checkUserPresent(post.username, followersList) ||
			post.username === username
	);
};
