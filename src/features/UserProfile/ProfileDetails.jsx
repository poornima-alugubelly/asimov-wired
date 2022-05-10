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
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsLink45Deg } from "react-icons/bs";
import { flexSpaceBetween, flexCenter } from "../../styles";
import { EditProfileForm } from "./EditProfileForm";
import { useNavigate } from "react-router-dom";
import { useColorToggler } from "../../hooks/useColorToggler";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features";
import { checkItemPresent } from "../../helpers/checkItemPresent";
import { followUser, unfollowUser } from "./userProfileSlice";

export const ProfileDetails = ({ user, userPostsLength }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		firstName,
		lastName,
		username: currUserName,
		bookmarks,
		followers,
		following,
		bio,
		portfolio,
		_id: followUserId,
	} = user;

	const {
		user: { username, id: userId },
		token,
	} = useSelector((state) => state.auth);

	return (
		<Stack spacing="4" w="90%" direction={["column", "row"]} py="4">
			<Avatar
				name="Oshigaki Kisame"
				src="https://bit.ly/dan-abramov"
				size="2xl"
			/>
			<Box>
				<Flex {...flexSpaceBetween}>
					<Box pr="2">
						<Text fontSize="2xl">{`${firstName} ${lastName}`}</Text>
						<Text color="gray">{`@${currUserName}`}</Text>
					</Box>
					<Box>
						<HStack>
							{username === currUserName ? (
								<>
									<EditProfileForm />
									<IconButton
										icon={<RiLogoutCircleRLine />}
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
							) : checkItemPresent(userId, followers) ? (
								<Button
									onClick={() =>
										dispatch(unfollowUser({ followUserId, token }))
									}
								>
									unfollow
								</Button>
							) : (
								<Button
									onClick={() => dispatch(followUser({ followUserId, token }))}
								>
									follow
								</Button>
							)}
						</HStack>
					</Box>
				</Flex>
				<Text>{bio}</Text>
				<Flex justifyContent="space-between" minW="80">
					<Text>{`${userPostsLength} Post${
						userPostsLength === 1 ? "" : "s"
					}`}</Text>
					<Text>{`${followers.length} followers`}</Text>
					<Text>{`${following.length} following`}</Text>
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
