import { Box, Center } from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts, PostCard } from "../index";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByDate } from "../../helpers/sortByDate";
import { getUserFeed } from "../../helpers/getUserFeed";
import { getTrendingPosts } from "../../helpers/getTrendingPosts";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export const AllPosts = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	let { allPosts, sortBy } = useSelector((state) => state.posts);
	const lastElement = useRef(null);
	const {
		user: { following, username },
	} = useSelector((state) => state.auth);
	if (sortBy === "trending") {
		allPosts = getTrendingPosts(allPosts);
	} else {
		const userFeed = getUserFeed(allPosts, following, username);

		if (sortBy === "Oldest") {
			allPosts = sortByDate(userFeed, true);
		} else {
			allPosts = sortByDate(userFeed);
		}
	}

	let { pageNum } = useInfiniteScroll({ allPosts, lastElement });
	console.log("pageNum", pageNum);
	console.log(
		allPosts.slice(0, (pageNum - 1) * 6),
		allPosts.slice((pageNum - 1) * 6, pageNum * 6)
	);
	useEffect(() => dispatch(getPosts()), []);
	const postsToShow = allPosts.slice(0, pageNum * 6);
	return (
		<>
			{postsToShow?.map((post) => (
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
			<div ref={lastElement}></div>
		</>
	);
};
