import {
	Flex,
	HStack,
	Avatar,
	Text,
	Box,
	Image,
	VStack,
	IconButton,
	MenuList,
	MenuItem,
	Menu,
	MenuButton,
	Input,
	Textarea,
	Button,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useColorToggler } from "../../../hooks/useColorToggler";
import { useState } from "react";
import {
	deletePost,
	dislikePost,
	editPost,
	likePost,
} from "../../../reducers/postSlice";
import { postCardStyle, flexSpaceBetween } from "../../../styles";
import { checkUserPresent } from "../../../helpers/checkUserPresent";

export const PostCard = ({ postDetails }) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [postEdited, setPostEdited] = useState({ ...postDetails });
	const {
		user: { firstName, lastName, username: currUser, id: userId },
		token,
	} = useSelector((state) => state.auth);
	const { id, _id, content, likes, username, image } = postDetails;
	console.log("userId", userId);
	// console.log(likes, likes.likedBy, checkUserPresent(userId, likes.likedBy));
	const colorToggler = useColorToggler();

	const saveHandler = () => {
		dispatch(editPost({ token, postId: _id, postData: postEdited }));
		setIsEditing(false);
	};

	const deleteHandler = () => {
		dispatch(deletePost({ token, postId: _id }));
	};

	const likeHandler = () => {
		dispatch(likePost({ token, postId: _id }));
	};
	const dislikeHandler = () => {
		dispatch(dislikePost({ token, postId: _id }));
	};

	return (
		<VStack {...postCardStyle}>
			<Flex {...flexSpaceBetween}>
				<HStack spacing="3">
					<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
					<Box>
						<Text>{`${firstName} ${lastName}`}</Text>
						<Text color="gray">{`@${username}`}</Text>
					</Box>
				</HStack>
				{currUser === username && (
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							variant={"unstyled"}
							icon={<BsThreeDotsVertical className="icon-btn" />}
						/>
						<MenuList bgColor={colorToggler(900)}>
							<MenuItem
								icon={<BiEdit fontSize={"24"} />}
								fontSize={"md"}
								onClick={() => {
									setIsEditing(true);
								}}
							>
								Edit Post
							</MenuItem>
							<MenuItem
								icon={<MdOutlineDeleteOutline fontSize={"24"} />}
								fontSize={"md"}
								onClick={deleteHandler}
							>
								Delete Post
							</MenuItem>
						</MenuList>
					</Menu>
				)}
			</Flex>

			{isEditing ? (
				<VStack w="full" alignItems={"flex-start"} spacing="4">
					<Textarea
						height="200"
						value={postEdited.content}
						onChange={(e) =>
							setPostEdited((prev) => ({ ...prev, content: e.target.value }))
						}
					></Textarea>{" "}
					<Box>
						<Button onClick={saveHandler}>Save</Button>{" "}
						<Button variant={"outline"} onClick={setIsEditing(false)}>
							Cancel
						</Button>
					</Box>
				</VStack>
			) : (
				<Text>{content}</Text>
			)}
			{image && (
				<Box w="full">
					<Image
						src="https://bit.ly/dan-abramov"
						alt="Dan Abramov"
						w="80%"
						borderRadius="30"
					/>
				</Box>
			)}
			<Box>
				{checkUserPresent(userId, likes?.likedBy) ? (
					<IconButton
						icon={<AiFillHeart className="icon-btn" />}
						variant="iconButton"
						onClick={dislikeHandler}
					/>
				) : (
					<IconButton
						icon={<AiOutlineHeart className="icon-btn" />}
						variant="iconButton"
						onClick={likeHandler}
					/>
				)}

				<Text color={colorToggler(400)}>Liked by {likes.likeCount} people</Text>
			</Box>
		</VStack>
	);
};
