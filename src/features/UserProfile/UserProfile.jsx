import { GridItem, Center, Box, Image } from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts, getUser, useProfile, getUserPost } from "../../features";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileDetails, PostCard, resetProfile } from "../../features";
import { postsGridContainer } from "../../styles";

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
		};
	}, [username]);
	const { userToDisplay, userPosts } = useProfile();

	return (
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
	);
};
