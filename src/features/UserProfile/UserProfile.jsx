import { Grid, GridItem, Center, Box, Image } from "@chakra-ui/react";
import { SideNav } from "../../components";
import { SuggestedProfiles } from "../Home/components/SuggestedProfiles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts, getUser, useProfile } from "../../features";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileDetails, PostCard, resetProfile } from "../../features";
import {
	mainContainer,
	mainGrid,
	sideNavGrid,
	postsGridContainer,
} from "../../styles";
import { getUserPost } from "./userProfileSlice";

export const UserProfile = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const params = useParams();
	const { username } = params;
	useEffect(() => {
		dispatch(getUser({ username }));
		dispatch(getUserPost({ username }));
		return () => {
			dispatch(resetProfile());
			console.log("unmounted");
		};
	}, [username]);
	const { userToDisplay, userPosts } = useProfile();

	return (
		<Box {...mainContainer}>
			<Grid {...mainGrid}>
				<GridItem {...sideNavGrid}>
					<SideNav />
				</GridItem>

				<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
					<Box borderBottom={"1px solid"} borderBottomColor={colorToggler(600)}>
						<Center>
							{userToDisplay?.username && (
								<ProfileDetails
									user={userToDisplay}
									userPostsLength={userPosts.length}
								/>
							)}
						</Center>
					</Box>
					{userPosts?.map((post) => (
						<Box
							borderBottom={"1px solid"}
							borderBottomColor={colorToggler(600)}
							key={post._id}
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
					<SuggestedProfiles />
				</GridItem>
			</Grid>
		</Box>
	);
};
