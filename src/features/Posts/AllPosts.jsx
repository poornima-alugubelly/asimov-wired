import { Box, Center, Spinner } from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts, PostCard } from "../index";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByDate } from "../../helpers/sortByDate";
import { getUserFeed } from "../../helpers/getUserFeed";
import { getTrendingPosts } from "../../helpers/getTrendingPosts";

export const AllPosts = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	let { allPosts, sortBy } = useSelector((state) => state.posts);
	const [pageNum, setPageNum] = useState(0);
	const totalPages = Math.ceil(allPosts.length / 4);
	const [lastElement, setLastElement] = useState(null);
	const loader = useRef(null);
	const {
		user: { following, username },
	} = useSelector((state) => state.auth);
	if (sortBy === "trending") {
		allPosts = getTrendingPosts(allPosts);
	} else {
		const userFeed = getUserFeed(allPosts, following, username);

		if (sortBy === "oldest") {
			allPosts = sortByDate(userFeed, true);
		} else {
			allPosts = sortByDate(userFeed);
		}
	}
	console.log(pageNum, totalPages);

	useEffect(() => {
		const elementRef = loader.current;
		const handleObserver = (entries) => {
			const target = entries[0];
			if (
				target.isIntersecting &&
				(pageNum < totalPages || (pageNum === 0 && totalPages === 0))
			) {
				setPageNum((prev) => prev + 1);
			}
		};
		const observer = new IntersectionObserver(handleObserver);
		if (elementRef) {
			observer.observe(elementRef);
		}
		return () => {
			observer.unobserve(elementRef);
		};
	}, []);

	const postsToShow = allPosts.slice(0, pageNum * 4);

	useEffect(() => dispatch(getPosts()), []);
	console.log(postsToShow);
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
						<Box></Box>
					</Center>
				</Box>
			))}
			<div ref={loader}></div>
		</>
	);
};
