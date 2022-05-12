import {
	Box,
	GridItem,
	Center,
	HStack,
	Avatar,
	Text,
	VStack,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Button,
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
	IconButton,
	Icon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PostCard } from "./PostCard";
import { postsGridContainer, postCard, flexSpaceBetween } from "../../styles";
import { useColorToggler } from "../../hooks/useColorToggler";
import { useState } from "react";
import { addComment, deleteComment } from "./postSlice";
import { deleteCommentService } from "../../services/postServices";

export const Comments = () => {
	const params = useParams();
	const { postId } = params;
	const { allPosts } = useSelector((state) => state.posts);
	const {
		token,
		user: { username },
	} = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const currPost = allPosts?.find((post) => post._id === postId);
	const [text, setText] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const colorToggler = useColorToggler();

	return (
		<GridItem {...postsGridContainer} borderColor={colorToggler(400)}>
			<Box borderBottom={"1px solid"} borderBottomColor={colorToggler(600)}>
				<Center>
					{currPost && <PostCard postDetails={currPost} key={currPost?.id} />}
				</Center>
			</Box>
			<Box borderBottom={"1px solid"} borderBottomColor={colorToggler(600)}>
				<Center>
					<VStack {...postCard}>
						<HStack w="full">
							<Input
								pr="4.5rem"
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<Button
								onClick={() => {
									dispatch(
										addComment({ postId, commentData: { text }, token })
									);
									setText("");
								}}
							>
								comment
							</Button>
						</HStack>
					</VStack>
				</Center>
			</Box>
			{currPost?.comments?.map((comment) => (
				<Box
					borderBottom={"1px solid"}
					borderBottomColor={colorToggler(600)}
					key={comment.id}
				>
					<Flex {...flexSpaceBetween} py="4" pr="10" pl="10">
						<VStack spacing="2" align="flex-start">
							<Link
								to={`/profile/${comment?.username}`}
								state={{ pageToShow: "profile" }}
							>
								<HStack spacing="2">
									<Avatar
										name={`{${comment.firstName} ${comment.lastName}}`}
										src={comment?.avatarURL}
									/>
									<HStack spacing="1">
										<Text>{`${comment?.firstName} ${comment?.lastName}`}</Text>
										<Text color="gray">{`@${comment?.username}`}</Text>
										<Text color="gray">•</Text>{" "}
										<Text color="gray">{`${new Date(
											comment?.createdAt
										).toLocaleDateString()}`}</Text>
									</HStack>
								</HStack>
							</Link>

							<Text> {comment.text}</Text>
						</VStack>

						{comment?.username === username && (
							<IconButton
								icon={<MdOutlineDeleteOutline fontSize={"24"} />}
								variant="iconButton"
								onClick={() => {
									dispatch(
										deleteComment({
											postId,
											commentId: comment._id,
											token,
										})
									);
								}}
							/>
						)}
					</Flex>
				</Box>
			))}
		</GridItem>
	);
};
