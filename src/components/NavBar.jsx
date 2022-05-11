import {
	Box,
	Input,
	InputGroup,
	InputRightElement,
	IconButton,
	Flex,
	Avatar,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsSearch, BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useColorToggler } from "../hooks/useColorToggler";

export const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const colorToggler = useColorToggler();
	const {
		token,
		user: { username, firstName, lastName, avatarURL },
	} = useSelector((state) => state.auth);

	return (
		token && (
			<Flex
				h="20"
				justify="space-around"
				align="center"
				borderBottom="1px solid"
				borderColor={colorToggler(400)}
				bg={colorToggler(800)}
				position="fixed"
				pl="2"
				pr="2"
				top="0"
				right="0"
				left="0"
				zIndex="1"
			>
				<Box
					className="logo"
					color={colorToggler(400)}
					p="2"
					m="0"
					display={["none", "block", "block", "block"]}
				>
					<Link to="/">AW</Link>
				</Box>
				<Link to={`/profile/${username}`} state={{ pageToShow: "profile" }}>
					<Avatar
						name={`${firstName} ${lastName}`}
						display={["block", "none", "none", "none"]}
						src={avatarURL}
					/>
				</Link>

				<InputGroup w="md" m="2">
					<Input placeholder="enter username"></Input>
					<InputRightElement
						pointerEvents="none"
						children={<BsSearch />}
					></InputRightElement>
				</InputGroup>

				<IconButton
					icon={
						colorMode === "dark" ? (
							<BsFillSunFill className="icon-btn" />
						) : (
							<BsFillMoonStarsFill className="icon-btn" />
						)
					}
					variant="iconButton"
					onClick={toggleColorMode}
				/>
			</Flex>
		)
	);
};
