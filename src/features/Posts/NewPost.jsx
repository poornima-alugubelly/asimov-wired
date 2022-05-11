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
import { Link } from "react-router-dom";
import { createPost } from "../../features";
import { postCard, flexSpaceBetween } from "../../styles";

export const NewPost = ({ close = null }) => {
	const [content, setPostContent] = useState("");
	const dispatch = useDispatch();
	const {
		token,
		user: { firstName, lastName, username, avatarURL },
	} = useSelector((state) => state.auth);
	const submitHandler = () => {
		dispatch(createPost({ token, postData: { content } }));
		setPostContent("");
		if (close) {
			close();
		}
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
