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
	const { pageNum, loading } = useInfiniteScroll({ allPosts, lastElement });
	let firstSlice = allPosts.slice(0, (pageNum - 1) * 6);
	let lastSlice = allPosts.slice((pageNum - 1) * 6, pageNum * 6);
	return (
		<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
			{firstSlice?.map((post) => (
				<Box
					borderBottom={"1px solid"}
					borderBottomColor={colorToggler(600)}
					key={post.id}
				>
					<Center>
						<PostCard postDetails={post} />
					</Center>
				</Box>
			))}
			{loading ? (
				<Center py="4">
					<Spinner color={colorToggler(400)} size="xl" />
				</Center>
			) : null}
			{!loading &&
				lastSlice?.map((post) => (
					<Box
						borderBottom={"1px solid"}
						borderBottomColor={colorToggler(600)}
						key={post.id}
					>
						<Center>
							<PostCard postDetails={post} />
						</Center>
					</Box>
				))}

			<div ref={lastElement} key="xyz"></div>
		</GridItem>
	);
};
