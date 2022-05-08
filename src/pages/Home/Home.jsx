import { Grid, GridItem, Center, Divider, Box } from "@chakra-ui/react";
import { SideNav } from "../../components";
import { PostCard } from "./components/PostCard";
import { SuggestedProfiles } from "./components/SuggestedProfiles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts } from "../../reducers/postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewPost } from "./components/NewPost";

export const Home = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const { allPosts } = useSelector((state) => state.posts);
	useEffect(() => dispatch(getPosts()), []);
	console.log(allPosts);
	return (
		<Box maxW="90vw" pt="20" pb="20" m="auto">
			<Grid
				templateColumns={["1fr", "1fr", "repeat(4,1fr)", "repeat(5, 1fr)"]}
				gap={4}
				h="full"
			>
				<GridItem colSpan={1} display={["none", "none", "block", "block"]}>
					<SideNav />
				</GridItem>

				<GridItem
					colStart={2}
					colSpan={3}
					borderRight="1px solid"
					borderLeft="1px solid"
					borderColor={colorToggler(400)}
				>
					<Box borderBottom={"1px solid"} borderBottomColor={colorToggler(600)}>
						<Center>
							<NewPost />
						</Center>
					</Box>
					{allPosts?.map((post) => (
						<Box
							borderBottom={"1px solid"}
							borderBottomColor={colorToggler(600)}
						>
							<Center>
								<PostCard postDetails={post} />
							</Center>
							{/* <Divider orientation="horizontal" color={colorToggler(400)} /> */}
						</Box>
					))}
				</GridItem>
				<GridItem
					colStart={5}
					colSpan={1}
					display={["none", "none", "none", "block"]}
				>
					{" "}
					<SuggestedProfiles />
				</GridItem>
			</Grid>
		</Box>
	);
};
