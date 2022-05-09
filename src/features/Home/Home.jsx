import { Grid, GridItem, Center, Box } from "@chakra-ui/react";
import { SideNav } from "../../components";
import { PostCard } from "../Posts/PostCard";
import { SuggestedProfiles } from "./components/SuggestedProfiles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts } from "../../features";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewPost } from "../Posts/NewPost";
import {
	mainContainer,
	mainGrid,
	sideNavGrid,
	postsGridContainer,
} from "../../styles";

export const Home = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const { allPosts } = useSelector((state) => state.posts);
	useEffect(() => dispatch(getPosts()), []);
	console.log(allPosts);
	return (
		<Box {...mainContainer}>
			<Grid {...mainGrid}>
				<GridItem {...sideNavGrid}>
					<SideNav />
				</GridItem>

				<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
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
