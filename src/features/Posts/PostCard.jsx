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
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useColorToggler } from "../../hooks/useColorToggler";
import { useEffect, useState } from "react";
import { deletePost, dislikePost, editPost, likePost } from "../../features";
import { postCard, flexSpaceBetween } from "../../styles";
import { checkItemPresent } from "../../helpers/checkItemPresent";
import { useLocation } from "react-router-dom";
import { addBookmark, getBookmarks, removeBookmark } from "./postSlice";

export const PostCard = ({ postDetails }) => {
	const dispatch = useDispatch();
	useEffect(() => getBookmarks(), []);
	const { bookmarkedPosts } = useSelector((state) => state.posts);
	const [isEditing, setIsEditing] = useState(false);
	const [postEdited, setPostEdited] = useState({ ...postDetails });
	let location = useLocation();
	let currPage = location.state?.pageToShow;
	const {
		user: { username: currUser, id: userId },
		token,
	} = useSelector((state) => state.auth);
	const {
		id: postId,
		_id,
		content,
		likes,
		username,
		image,
		firstName,
		lastName,
	} = postDetails;

	const colorToggler = useColorToggler();

	const saveHandler = () => {
		dispatch(editPost({ token, postId: _id, postData: postEdited }));
		setIsEditing(false);
	};

	return (
		<VStack {...postCard}>
			<Flex {...flexSpaceBetween}>
				<Link to={`/profile/${username}`} state={{ pageToShow: "profile" }}>
					<HStack spacing="3">
						<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
						<Box>
							<Text>{`${firstName} ${lastName}`}</Text>
							<Text color="gray">{`@${username}`}</Text>
						</Box>
					</HStack>
				</Link>

				{username === currUser && currPage && (
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
								onClick={() => dispatch(deletePost({ token, postId: _id }))}
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
						<Button variant={"outline"} onClick={() => setIsEditing(false)}>
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
			<Box w="full">
				<Box display="flex" justifyContent="space-between">
					{checkItemPresent(userId, likes?.likedBy) ? (
						<IconButton
							icon={<AiFillHeart className="icon-btn" />}
							variant="iconButton"
							onClick={() => dispatch(dislikePost({ token, postId: _id }))}
						/>
					) : (
						<IconButton
							icon={<AiOutlineHeart className="icon-btn" />}
							variant="iconButton"
							onClick={() => dispatch(likePost({ token, postId: _id }))}
						/>
					)}

					{checkItemPresent(postId, bookmarkedPosts) ? (
						<IconButton
							icon={<IoBookmark className="icon-btn" />}
							variant="iconButton"
							onClick={() => dispatch(removeBookmark({ token, postId: _id }))}
						/>
					) : (
						<IconButton
							icon={<IoBookmarkOutline className="icon-btn" />}
							variant="iconButton"
							onClick={() => dispatch(addBookmark({ token, postId: _id }))}
						/>
					)}
				</Box>

				<Text color={colorToggler(400)}>Liked by {likes.likeCount} people</Text>
			</Box>
		</VStack>
	);
};
