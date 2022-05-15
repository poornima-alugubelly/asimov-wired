import { useRef } from "react";
import { GridItem, Box, Center, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { sortByDate } from "../../helpers/sortByDate";
import { PostCard } from "..";
import { postsGridContainer } from "../../styles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export const Explore = () => {
	const colorToggler = useColorToggler();
	let { allPosts } = useSelector((state) => state.posts);
	allPosts = sortByDate(allPosts);
	const lastElement = useRef(null);
	const { pageNum } = useInfiniteScroll({ allPosts, lastElement });
	const postsToShow = allPosts.slice(0, pageNum * 6);
	return (
		<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
			{postsToShow?.map((post) => (
				<Box
					borderBottom={"1px solid"}
					borderBottomColor={colorToggler(600)}
					key={post.id}
				>
					<Center>
						<PostCard postDetails={post} />
						<Box></Box>
					</Center>
				</Box>
			))}

			<div ref={lastElement}></div>
		</GridItem>
	);
};
