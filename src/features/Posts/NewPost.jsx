import {
	Textarea,
	Flex,
	Button,
	VStack,
	HStack,
	Avatar,
	Box,
	Image,
	Text,
	Icon,
	CircularProgress,
	CircularProgressLabel,
	Input,
	FormControl,
	FormLabel,
	CloseButton,
	IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import {
	AiOutlinePicture,
	AiFillCloseCircle,
	AiOutlineGif,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPost, gifClicked } from "./postSlice";
import { postCard, flexSpaceBetween } from "../../styles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { GifGrid } from "./GifGrid";

export const NewPost = ({ close = null }) => {
	const [postData, setPostData] = useState({
		content: "",
		postImage: "",
	});
	const { content, postImage } = postData;
	const [posting, setPosting] = useState();
	const { gifSelected } = useSelector((state) => state.posts);

	const dispatch = useDispatch();
	const {
		token,
		user: { firstName, lastName, username, avatarURL },
	} = useSelector((state) => state.auth);

	const colorToggler = useColorToggler();
	const submitHandler = async () => {
		if (!postImage) {
			dispatch(createPost({ token, postData: { ...postData, gifSelected } }));
			setPostData({ content: "" });
			dispatch(gifClicked(""));
		} else {
			const data = new FormData();
			setPosting(true);
			data.append("file", postImage);
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
							postData: { content: postData.content, postImage: json.url },
						})
					);
					setPosting(false);
					setPostData({ content: "", postImage: "" });
				})
				.catch((error) => {
					console.error(error);
				});
		}
		if (close) close();
	};
	return (
		<VStack {...postCard}>
			<Link to={`/profile/${username}`} state={{ pageToShow: "profile" }}>
				<HStack spacing="3">
					<Avatar name={`${firstName}${lastName}`} src={avatarURL} />
					<Box>
						<Text>{`${firstName} ${lastName}`}</Text>
						<Text color="gray">{`@${username}`}</Text>
					</Box>
				</HStack>
			</Link>
			<Textarea
				placeholder="Whats happening?"
				height="24"
				width="100%"
				outline="none"
				border="none"
				resize="none"
				focusBorderColor="transparent"
				value={postData.content}
				onChange={(e) =>
					setPostData((prev) => ({ ...prev, content: e.target.value }))
				}
			></Textarea>
			{postData.postImage && (
				<Box w="full">
					<Box w="fit-content" h="500" position="relative" m="auto">
						<Image
							src={URL.createObjectURL(postData.postImage)}
							alt="uploaded post"
							w="100%"
							h="500"
							objectFit={"contain"}
						/>
						<IconButton
							position="absolute"
							top="4%"
							right="4%"
							icon={<AiFillCloseCircle color="black" />}
							variant="iconButton"
							fontSize={"30"}
							onClick={() =>
								setPostData((prev) => ({ ...prev, postImage: "" }))
							}
						/>
					</Box>
				</Box>
			)}
			{gifSelected && (
				<Box w="full">
					<Box w="fit-content" h="500" position="relative" m="auto">
						<Image
							src={gifSelected}
							alt="uploaded post"
							w="100%"
							h="500"
							objectFit={"contain"}
						/>
						<IconButton
							position="absolute"
							top="3%"
							right="3%"
							icon={<AiFillCloseCircle color="black" />}
							variant="iconButton"
							fontSize={"30"}
							onClick={() => {
								setPostData((prev) => ({ ...prev, postImage: "" }));
								dispatch(gifClicked(""));
							}}
						/>
					</Box>
				</Box>
			)}
			<Flex {...flexSpaceBetween}>
				<HStack spacing="8">
					<FormControl width="1rem">
						<FormLabel
							position="absolute"
							left="0"
							bottom="0"
							cursor="pointer"
							marginBottom="0"
						>
							{gifSelected ? (
								<Icon
									as={AiOutlinePicture}
									fontSize={"30"}
									color="gray"
									cursor={"not-allowed"}
								/>
							) : (
								<Icon as={AiOutlinePicture} fontSize={"30"} />
							)}
						</FormLabel>
						<Input
							type="file"
							visibility="hidden"
							accept="image/*"
							onChange={(e) =>
								setPostData((prev) => ({
									...prev,
									postImage: e.target.files[0],
								}))
							}
						/>
					</FormControl>
					<GifGrid imageSelected={postImage} />
				</HStack>
				<HStack spacing="2">
					{content.length !== 0 && (
						<CircularProgress
							value={content.length * (1 / 4)}
							color={content.length > 400 ? "red" : colorToggler(400)}
							size="35px"
						>
							{content.length > 390 && (
								<CircularProgressLabel
									fontSize={"15"}
									color={content.length > 400 ? "red" : "yellow"}
								>
									{400 - content.length}
								</CircularProgressLabel>
							)}
						</CircularProgress>
					)}
					{posting ? (
						<Button isLoading loadingText="posting"></Button>
					) : (
						<Button
							onClick={submitHandler}
							isDisabled={
								(content.trim().length === 0 &&
									postImage === "" &&
									gifSelected === "") ||
								content.length > 400
							}
						>
							Post
						</Button>
					)}
				</HStack>
			</Flex>
		</VStack>
	);
};

export default NewPost;
