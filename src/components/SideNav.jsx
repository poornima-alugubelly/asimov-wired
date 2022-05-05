import { List, ListIcon, ListItem, Flex, Link } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiNotification2Line } from "react-icons/ri";
import { useColorToggler } from "../hooks/useColorToggler";
import { NavLink } from "react-router-dom";
export const SideNav = () => {
	const colorToggler = useColorToggler();
	const getActiveStyle = ({ isActive }) => ({
		color: isActive ? "#01d2ed" : "",
	});
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
				<NavLink style={getActiveStyle} to="/login">
					<Flex align="center" gap={4}>
						<ListIcon as={CgProfile} color="brand.400" className="icon-btn" />
						<span>Profile</span>
					</Flex>
				</NavLink>
			</ListItem>
			<ListItem fontSize="24">
				<NavLink style={getActiveStyle} to="/notifications">
					<Flex align="center" gap={4}>
						<ListIcon
							as={RiNotification2Line}
							color="brand.400"
							className="icon-btn"
						/>
						<span>Notification</span>
					</Flex>
				</NavLink>
			</ListItem>
		</List>
	);
};
