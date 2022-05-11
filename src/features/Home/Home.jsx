import { Grid, GridItem, Center, Box } from "@chakra-ui/react";
import { SideNav } from "../../components";
import { PostCard } from "../Posts/PostCard";
import { SuggestedProfiles } from "../Users/SuggestedProfiles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts, AllPosts } from "../../features";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewPost } from "../Posts/NewPost";
import {
	mainContainer,
	mainGrid,
	sideNavGrid,
	postsGridContainer,
} from "../../styles";
import { useLocation } from "react-router-dom";
import { UserProfile } from "../UserProfile/UserProfile";
import { Bookmarks } from "../Posts/Bookmarks";
import { SortPosts } from "./components/SortPosts";
import { Explore } from "../Posts/Explore";

export const Home = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const { allPosts } = useSelector((state) => state.posts);
	useEffect(() => dispatch(getPosts()), []);
	let location = useLocation();
	let currPage = location.state?.pageToShow;
	return (
		<Box {...mainContainer}>
			<Grid {...mainGrid}>
				<GridItem {...sideNavGrid}>
					<SideNav />
				</GridItem>
				{(() => {
					if (currPage === "profile") return <UserProfile />;
					else if (currPage === "bookmarks") return <Bookmarks />;
					else if (currPage === "explore") return <Explore />;
					else {
						return (
							<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
								<Box
									borderBottom={"1px solid"}
									borderBottomColor={colorToggler(600)}
								>
									<Center>
										<NewPost />
									</Center>
								</Box>
								<AllPosts />
							</GridItem>
						);
					}
				})()}
				<GridItem
					colStart={5}
					colSpan={1}
					display={["none", "none", "none", "block"]}
				>
					<Box position="fixed" m="2" mt="4" pb="4" pt="2" w="100%">
						{currPage === undefined && <SortPosts />}
						<SuggestedProfiles />
					</Box>
				</GridItem>
			</Grid>
		</Box>
	);
};
