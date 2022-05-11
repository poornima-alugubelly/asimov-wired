export const sortByDate = (postList, oldestFirst = false) => {
	const posts = [...postList];

	if (oldestFirst)
		return posts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

	return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};
