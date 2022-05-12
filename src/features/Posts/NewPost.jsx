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
	IconButton,
	CircularProgress,
	CircularProgressLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPost } from "./postSlice";
import { postCard, flexSpaceBetween } from "../../styles";
import { useColorToggler } from "../../hooks/useColorToggler";

export const NewPost = ({ close = null }) => {
	const [content, setPostContent] = useState("");
	const dispatch = useDispatch();
	const {
		token,
		user: { firstName, lastName, username, avatarURL },
	} = useSelector((state) => state.auth);
	const submitHandler = () => {
		dispatch(createPost({ token, postData: { content: content.trim() } }));
		setPostContent("");
		if (close) {
			close();
		}
	};
	const colorToggler = useColorToggler();
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
				value={content}
				onChange={(e) => setPostContent(e.target.value)}
			></Textarea>
			{/* <Box w="full">
				<Image
					src="https://bit.ly/dan-abramov"
					alt="Dan Abramov"
					w="80%"
					borderRadius="30"
				/>
			</Box> */}
			<Flex justify="flex-end" w="full">
				<HStack spacing="2">
					{content.trim().length !== 0 && (
						<CircularProgress
							value={content.trim().length * (1 / 4)}
							color={content.trim().length > 400 ? "red" : colorToggler(400)}
							size="35px"
						>
							{content.length > 390 && (
								<CircularProgressLabel
									fontSize={"15"}
									color={content.trim().length > 400 ? "red" : "yellow"}
								>
									{400 - content.trim().length}
								</CircularProgressLabel>
							)}
						</CircularProgress>
					)}

					<Button
						onClick={submitHandler}
						isDisabled={
							content.trim().length === 0 || content.trim().length > 400
						}
					>
						Post
					</Button>
				</HStack>
			</Flex>
		</VStack>
	);
};

export default NewPost;
