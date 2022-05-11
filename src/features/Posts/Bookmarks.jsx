import { useEffect } from "react";
import { GridItem, Box, Center } from "@chakra-ui/react";
import { PostCard } from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks } from "./postSlice";
import { postsGridContainer } from "../../styles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { checkItemPresent } from "../../helpers/checkItemPresent";

export const Bookmarks = () => {
	const dispatch = useDispatch();
	const { bookmarkedPosts, allPosts } = useSelector((state) => state.posts);
	const { token } = useSelector((state) => state.auth);
	const colorToggler = useColorToggler();
	useEffect(() => dispatch && dispatch(getBookmarks({ token })), [dispatch]);
	console.log(bookmarkedPosts);
	const allBookmarkedPosts = allPosts.filter((post) => {
		for (let id of bookmarkedPosts) {
			return post._id === id;
		}
	});

	return bookmarkedPosts?.length === 0 ? (
		<GridItem {...postsGridContainer} border="none">
			<Center pt="90" margin="auto">
				No posts bookmarked yet...
			</Center>
		</GridItem>
	) : (
		<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
			{allBookmarkedPosts?.map((post) => (
				<Box
					borderBottom={"1px solid"}
					borderBottomColor={colorToggler(600)}
					key={post._id}
				>
					<Center>
						<PostCard postDetails={post} />
					</Center>
				</Box>
			))}
		</GridItem>
	);
};
