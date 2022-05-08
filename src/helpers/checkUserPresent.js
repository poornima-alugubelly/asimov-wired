export const checkUserPresent = (userId, givenArray) => {
	const res = givenArray.find((item) => item.id === userId);
	return res;
};
