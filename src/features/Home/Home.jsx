import { Grid, GridItem, Center, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { SideNav } from "../../components";
import { SuggestedProfiles, getPosts, AllPosts, NewPost, Comments } from "..";
import { useColorToggler } from "../../hooks/useColorToggler";
import {
	mainContainer,
	mainGrid,
	sideNavGrid,
	postsGridContainer,
} from "../../styles";
import { UserProfile } from "../Users/UserProfile";
import { Bookmarks } from "./Bookmarks";
import { SortPosts } from "./components/SortPosts";
import { Explore } from "./Explore";
import { NavBar } from "../../components/NavBar";
import { BottomNav } from "../../components/BottomNav";
import { Footer } from "../../components/Footer";
import { getAllUsers } from "..";

export const Home = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const { allPosts } = useSelector((state) => state.posts);
	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getPosts());
	}, []);
	let location = useLocation();
	let currPage = location.state?.pageToShow;
	return (
		<>
			<NavBar />
			<Box {...mainContainer}>
				<Grid {...mainGrid}>
					<GridItem {...sideNavGrid}>
						<SideNav />
					</GridItem>
					{(() => {
						if (currPage === "profile") return <UserProfile />;
						else if (currPage === "bookmarks") return <Bookmarks />;
						else if (currPage === "explore") return <Explore />;
						else if (currPage === "comments") return <Comments />;
						else {
							return (
								<GridItem
									{...postsGridContainer}
									borderColor={colorToggler(400)}
								>
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
			<Footer />
			<BottomNav />
		</>
	);
};
