import { checkUserPresent } from "./checkUserPresent";

export const getUserFeed = (postsList, followersList) => {
	return postsList.filter((post) =>
		checkUserPresent(post.username, followersList)
	);
};
