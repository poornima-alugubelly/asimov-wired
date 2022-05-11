import { List, ListIcon, ListItem, Flex, Link, Center } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiNotification2Line } from "react-icons/ri";
import { useColorToggler } from "../hooks/useColorToggler";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { NewPostModal } from "../features";

export const SideNav = () => {
	const colorToggler = useColorToggler();
	const getActiveStyle = ({ isActive }) => ({
		color: isActive ? "#01d2ed" : "",
	});
	const {
		user: { username },
	} = useSelector((state) => state.auth);
	return (
		<List position="fixed" pt="16" spacing={3}>
			<ListItem fontSize="24">
				<NavLink style={getActiveStyle} to="/">
					<Flex align="center" gap={4}>
						<ListIcon
							as={AiOutlineHome}
							color={colorToggler(400)}
							className="icon-btn"
						/>
						<span>Home</span>
					</Flex>
				</NavLink>
			</ListItem>
			<ListItem fontSize="24">
				<NavLink
					style={getActiveStyle}
					to="/explore"
					state={{ pageToShow: "explore" }}
				>
					<Flex align="center" gap={4}>
						<ListIcon
							as={AiOutlineHome}
							color={colorToggler(400)}
							className="icon-btn"
						/>
						<span>Explore</span>
					</Flex>
				</NavLink>
			</ListItem>

			<ListItem fontSize="24">
				<NavLink
					style={getActiveStyle}
					to={`/profile/${username}`}
					state={{ pageToShow: "profile" }}
				>
					<Flex align="center" gap={4}>
						<ListIcon as={CgProfile} color="brand.400" className="icon-btn" />
						<span>Profile</span>
					</Flex>
				</NavLink>
			</ListItem>
			<ListItem fontSize="24">
				<NavLink
					style={getActiveStyle}
					to="/bookmarks"
					state={{ pageToShow: "bookmarks" }}
				>
					<Flex align="center" gap={4}>
						<ListIcon
							as={RiNotification2Line}
							color="brand.400"
							className="icon-btn"
						/>
						<span>Bookmarks</span>
					</Flex>
				</NavLink>
			</ListItem>
			<ListItem>
				<Center>
					<NewPostModal />
				</Center>
			</ListItem>
		</List>
	);
};
