import {
	Image,
	Box,
	Avatar,
	Stack,
	HStack,
	Flex,
	Button,
	Text,
	IconButton,
	Link,
	Icon,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import { flexSpaceBetween } from "../../styles";
import { EditProfileForm } from "./EditProfileForm";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "..";
import { followUser, unfollowUser } from "./usersSlice";
import { checkUserPresent } from "../../helpers/checkUserPresent";
import { useState } from "react";
import { UsersListModal } from "./UsersListModal";

export const ProfileDetails = ({ user, userPostsLength }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		firstName,
		lastName,
		username: currUserName,
		avatarURL,
		followers,
		following,
		bio,
		portfolio,
		_id,
	} = user;

	const {
		user: { username, id },
		token,
	} = useSelector((state) => state.auth);

	const [openFollowersList, setOpenFollowersList] = useState(false);
	const [openFollowingList, setOpenFollowingList] = useState(false);

	return (
		<Stack spacing="4" w="90%" direction={["column", "row"]} py="4">
			<Avatar name={`${firstName} ${lastName}`} src={avatarURL} size="2xl" />
			<Box>
				<Flex {...flexSpaceBetween}>
					<Box pr="2" mr="4">
						<Text fontSize="2xl">{`${firstName} ${lastName}`}</Text>
						<Text color="gray">{`@${currUserName}`}</Text>
					</Box>
					<Box>
						<HStack>
							{username === currUserName ? (
								<>
									<EditProfileForm />
									<IconButton
										icon={<FiLogOut />}
										fontSize="2xl"
										color="gray"
										variant="iconButton"
										onClick={() => {
											dispatch(logout());
											navigate("/");
											localStorage.removeItem("tokenASM");
											localStorage.removeItem(
												localStorage.getItem("AsimovWUser")
											);
										}}
									/>
								</>
							) : checkUserPresent(username, followers) ? (
								<Button
									onClick={() =>
										dispatch &&
										dispatch(unfollowUser({ followUserId: user._id, token }))
									}
								>
									unfollow
								</Button>
							) : (
								<Button
									onClick={() =>
										dispatch &&
										dispatch(followUser({ followUserId: user._id, token }))
									}
								>
									follow
								</Button>
							)}
						</HStack>
					</Box>
				</Flex>
				<Text>{bio}</Text>
				<Flex justifyContent="space-between" w="60">
					<Text>{`${userPostsLength} Post${
						userPostsLength === 1 ? "" : "s"
					}`}</Text>
					<Link
						onClick={() => setOpenFollowersList(true)}
					>{`${followers.length} followers`}</Link>
					<Link
						onClick={() => setOpenFollowingList(true)}
					>{`${following.length} following`}</Link>

					{openFollowersList && (
						<UsersListModal
							usersList={followers}
							setClose={setOpenFollowersList}
							modalTitle="FOLLOWERS"
						/>
					)}
					{openFollowingList && (
						<UsersListModal
							usersList={following}
							setClose={setOpenFollowingList}
							modalTitle="FOLLOWING"
						/>
					)}
				</Flex>

				{portfolio && (
					<Flex align="center">
						<Icon as={BsLink45Deg} />
						<Link href="#">{portfolio}</Link>
					</Flex>
				)}
			</Box>
		</Stack>
	);
};
