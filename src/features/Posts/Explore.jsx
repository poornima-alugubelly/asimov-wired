import { GridItem, Box, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { sortByDate } from "../../helpers/sortByDate";
import { PostCard } from "./PostCard";
import { postsGridContainer } from "../../styles";
import { useColorToggler } from "../../hooks/useColorToggler";

export const Explore = () => {
	const colorToggler = useColorToggler();
	let { allPosts } = useSelector((state) => state.posts);
	allPosts = sortByDate(allPosts);
	return (
		<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
			{allPosts?.map((post) => (
				<Box
					borderBottom={"1px solid"}
					borderBottomColor={colorToggler(600)}
					key={post.id}
				>
					<Center>
						<PostCard postDetails={post} key={post.id} />
					</Center>
				</Box>
			))}
		</GridItem>
	);
};
