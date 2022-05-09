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
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features";
import { postCard, flexSpaceBetween } from "../../styles";

export const NewPost = () => {
	const [content, setPostContent] = useState("");
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const submitHandler = () => {
		dispatch(createPost({ token, postData: { content } }));
		setPostContent("");
	};
	return (
		<VStack {...postCard}>
			<HStack spacing="3">
				<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
				<Box>
					<Text>Some fancy cringey name</Text>
					<Text color="gray">@username</Text>
				</Box>
			</HStack>
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
			<Flex {...flexSpaceBetween}>
				<IconButton
					icon={<AiOutlinePicture className="icon-btn" />}
					variant="iconButton"
				/>
				<Button onClick={submitHandler}>Post</Button>
			</Flex>
		</VStack>
	);
};

export default NewPost;
