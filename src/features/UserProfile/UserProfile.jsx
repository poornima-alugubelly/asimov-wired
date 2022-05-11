import { GridItem, Center, Box, Image } from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";
import { getPosts, getUser, useProfile, getUserPost } from "../../features";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileDetails, PostCard, resetProfile } from "../../features";
import { postsGridContainer } from "../../styles";
import { sortByDate } from "../../helpers/sortByDate";

export const UserProfile = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const params = useParams();
	const { username } = params;
	useEffect(() => {
		if (dispatch) {
			dispatch(getUser({ username }));
			dispatch(getUserPost({ username }));
		}

		return () => {
			dispatch(resetProfile());
		};
	}, [username, dispatch]);
	let { userToDisplay } = useProfile();
	let { allPosts } = useSelector((state) => state.posts);
	// let {
	// 	user: { username: authUsername },
	// } = useSelector((state) => state.auth);

	// if (authUsername === username) {
	// 	userPosts = allPosts.filter((post) => post.username === authUsername);
	// }
	let userPosts = allPosts.filter((post) => post.username === username);
	userPosts = sortByDate(userPosts);
	console.log(userPosts);

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
					key={post.id}
				>
					<Center>
						<PostCard postDetails={post} key={post.id} />
					</Center>
					{/* <Divider orientation="horizontal" color={colorToggler(400)} /> */}
				</Box>
			))}
		</GridItem>
	);
};
