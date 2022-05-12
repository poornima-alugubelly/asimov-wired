import { Box, IconButton, Flex, Avatar } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useColorToggler } from "../hooks/useColorToggler";
import { Search } from "../features";

export const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const colorToggler = useColorToggler();
	const navigate = useNavigate();
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

				<Avatar
					name={`${firstName} ${lastName}`}
					display={["block", "none", "none", "none"]}
					src={avatarURL}
					onClick={() =>
						navigate(`/profile/${username}`, {
							state: { pageToShow: "profile" },
						})
					}
				/>

				<Search />

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
