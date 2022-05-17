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
	Link as ChakraLink,
	FormControl,
	FormLabel,
	Icon,
	Center,
} from "@chakra-ui/react";
import {
	AiOutlineHeart,
	AiFillHeart,
	AiFillCloseCircle,
	AiOutlinePicture,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useColorToggler } from "../../hooks/useColorToggler";
import { useEffect, useState } from "react";
import {
	deletePost,
	dislikePost,
	editPost,
	likePost,
	setOpenLikesList,
	addBookmark,
	getBookmarks,
	removeBookmark,
} from "./postSlice";
import { postCard, flexSpaceBetween } from "../../styles";
import { getTimeDifference } from "../../helpers/getTimeDifference";
import { checkUserPresent } from "../../helpers/checkUserPresent";
import { AvatarCard } from "../Users/AvatarCard";

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
	const checkInBookMarks = () =>
		bookmarkedPosts.find((bookmarkId) => bookmarkId === postDetails?._id);
	const colorToggler = useColorToggler();

	const saveHandler = async () => {
		if (postEdited.postImage === "") {
			dispatch(
				editPost({ token, postId: postDetails?._id, postData: postEdited })
			);
		} else {
			const data = new FormData();
			data.append("file", postEdited.postImage);
			data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
			const requestOptions = {
				method: "POST",
				body: data,
			};
			await fetch(
				"https://api.cloudinary.com/v1_1/dodkrr6ce/image/upload",
				requestOptions
			)
				.then((response) => response.json())
				.then((json) => {
					dispatch(
						createPost({
							token,
							postData: { content: postEdited.content, postImage: json.url },
						})
					);
				})
				.catch((error) => {
					console.error(error);
				});
		}
		setIsEditing(false);
	};

	const likedUsersInfo = () => {
		const { likeCount, likedBy } = postDetails?.likes;
		if (likeCount === 0) return "";
		if (likeCount === 1) return `Liked by ${likedBy[0].username}`;
		return `Liked by ${postDetails?.likes?.likedBy[0]?.username} and
		${postDetails?.likes?.likeCount - 1} others`;
	};

	return (
		<VStack {...postCard}>
			<Flex {...flexSpaceBetween}>
				<Link
					to={`/profile/${postDetails?.username}`}
					state={{ pageToShow: "profile" }}
				>
					<HStack spacing="2">
						<AvatarCard username={postDetails?.username} />
						<Text color="gray">•</Text>{" "}
						<Text color="gray">
							{getTimeDifference(postDetails?.createdAt)}
						</Text>
					</HStack>
				</Link>

				{postDetails?.username === currUser && currPage === "profile" && (
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							variant={"unstyled"}
							icon={<BsThreeDotsVertical className="icon-btn" />}
						/>
						<MenuList bgColor={colorToggler(800)}>
							<MenuItem
								icon={<BiEdit fontSize={"24"} />}
								fontSize={"md"}
								onClick={() => {
									setIsEditing(true);
								}}
								_hover={{ bgColor: colorToggler(900) }}
							>
								Edit Post
							</MenuItem>
							<MenuItem
								icon={<MdOutlineDeleteOutline fontSize={"24"} />}
								fontSize={"md"}
								onClick={() =>
									dispatch(deletePost({ token, postId: postDetails?._id }))
								}
								_hover={{ bgColor: colorToggler(900) }}
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
						<FormControl width="1rem">
							<FormLabel
								position="absolute"
								left="0"
								bottom="0"
								cursor="pointer"
								marginBottom="0"
							>
								<Icon as={AiOutlinePicture} fontSize={"30"} />
							</FormLabel>
							<Input
								type="file"
								visibility="hidden"
								accept="image/*"
								onChange={(e) =>
									setPostEdited((prev) => ({
										...prev,
										postImage: e.target.files[0],
									}))
								}
							/>
						</FormControl>
						<Button
							onClick={saveHandler}
							isDisabled={
								postEdited?.content.length === 0 &&
								postEdited?.postImage === "" &&
								postEdited?.gifSelected === ""
							}
						>
							Save
						</Button>{" "}
						<Button
							variant={"outline"}
							onClick={() => {
								setIsEditing(false);
								setPostEdited((prev) => ({
									...prev,
									content: postDetails?.content,
									postImage: postDetails?.postImage,
								}));
							}}
						>
							Cancel
						</Button>
					</Box>
				</VStack>
			) : (
				<Text w="100%">{postEdited?.content}</Text>
			)}
			{postEdited?.postImage && (
				<Box w="full" key={postEdited?.id}>
					<Box w="minContent" h="500" position="relative" m="auto">
						<Image
							src={
								typeof postEdited?.postImage === "string"
									? postEdited?.postImage
									: URL.createObjectURL(postEdited?.postImage)
							}
							alt="uploaded post"
							w="100%"
							h="500"
							objectFit={"contain"}
						/>

						{isEditing && (
							<IconButton
								position="absolute"
								top="3%"
								right="3%"
								icon={<AiFillCloseCircle />}
								variant="iconButton"
								fontSize={"30"}
								onClick={() =>
									setPostEdited((prev) => ({
										...prev,
										postImage: "",
										gifSelected: "",
									}))
								}
							/>
						)}
					</Box>
				</Box>
			)}
			{postEdited?.gifSelected && (
				<Box w="full">
					<Box w="minContent" h="500" position="relative" m="auto">
						<Image
							src={postEdited?.gifSelected}
							alt="uploaded gif"
							w="100%"
							h="500"
							objectFit={"contain"}
						/>

						{isEditing && (
							<IconButton
								position="absolute"
								top="3%"
								right="3%"
								icon={<AiFillCloseCircle />}
								variant="iconButton"
								fontSize={"30"}
								onClick={() =>
									setPostEdited((prev) => ({
										...prev,
										gifSelected: "",
									}))
								}
							/>
						)}
					</Box>
				</Box>
			)}
			<Box w="full">
				<Box display="flex" justifyContent="space-between">
					<HStack>
						{checkUserPresent(currUser, postDetails?.likes.likedBy) ? (
							<IconButton
								icon={<AiFillHeart className="icon-btn" />}
								variant="iconButton"
								onClick={() =>
									dispatch(dislikePost({ token, postId: postDetails?._id }))
								}
							/>
						) : (
							<IconButton
								icon={<AiOutlineHeart className="icon-btn" />}
								variant="iconButton"
								onClick={() =>
									dispatch(likePost({ token, postId: postDetails?._id }))
								}
							/>
						)}
						<Text color="gray">{postDetails?.likes.likeCount}</Text>
					</HStack>
					{
						<Link
							to={`/comments/${postDetails?._id}`}
							state={{ pageToShow: "comments" }}
						>
							<HStack>
								<IconButton
									icon={<GoCommentDiscussion className="icon-btn" />}
									variant="iconButton"
								/>
								<Text color="gray">{postDetails?.comments?.length}</Text>
							</HStack>
						</Link>
					}
					<HStack>
						{checkInBookMarks() ? (
							<IconButton
								icon={<IoBookmark className="icon-btn" />}
								variant="iconButton"
								onClick={() =>
									dispatch(removeBookmark({ token, postId: postDetails?._id }))
								}
							/>
						) : (
							<IconButton
								icon={<IoBookmarkOutline className="icon-btn" />}
								variant="iconButton"
								onClick={() =>
									dispatch(addBookmark({ token, postId: postDetails?._id }))
								}
							/>
						)}
					</HStack>
				</Box>
				<ChakraLink
					color={colorToggler(400)}
					onClick={() =>
						dispatch(
							setOpenLikesList({
								likesListState: true,
								likesListVal: postDetails?.likes?.likedBy,
							})
						)
					}
				>
					{likedUsersInfo()}
				</ChakraLink>
			</Box>
		</VStack>
	);
};
