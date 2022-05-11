import { Box, Center } from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts, PostCard } from "../index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByDate } from "../../helpers/sortByDate";
import { getUserFeed } from "../../helpers/getUserFeed";
import { getTrendingPosts } from "../../helpers/getTrendingPosts";

export const AllPosts = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	let { allPosts, sortBy } = useSelector((state) => state.posts);
	const {
		user: { following },
	} = useSelector((state) => state.auth);

	if (sortBy === "trending") {
		allPosts = getTrendingPosts(allPosts);
	} else {
		const userFeed = getUserFeed(allPosts, following);

		if (sortBy === "oldest") {
			allPosts = sortByDate(userFeed, true);
		} else if (sortBy === "newest") {
			allPosts = sortByDate(userFeed);
		} else {
			console.log(userFeed);
			allPosts = [...userFeed];
		}
	}

	useEffect(() => dispatch(getPosts()), []);

	return allPosts?.map((post) => (
		<Box
			borderBottom={"1px solid"}
			borderBottomColor={colorToggler(600)}
			key={post.id}
		>
			<Center>
				<PostCard postDetails={post} key={post.id} />
			</Center>
		</Box>
	));
};
