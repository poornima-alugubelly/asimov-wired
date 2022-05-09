import { Grid, GridItem, Center, Box, Image } from "@chakra-ui/react";
import { SideNav } from "../../components";
import { SuggestedProfiles } from "../Home/components/SuggestedProfiles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts } from "../../features";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileDetails, PostCard } from "../../features";
import {
	mainContainer,
	mainGrid,
	sideNavGrid,
	postsGridContainer,
} from "../../styles";

export const UserProfile = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const { allPosts } = useSelector((state) => state.posts);
	useEffect(() => dispatch(getPosts()), []);

	return (
		<Box {...mainContainer}>
			<Grid {...mainGrid}>
				<GridItem {...sideNavGrid}>
					<SideNav />
				</GridItem>

				<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
					<Box borderBottom={"1px solid"} borderBottomColor={colorToggler(600)}>
						<Center>
							<ProfileDetails />
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
