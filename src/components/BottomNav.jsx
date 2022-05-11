import { Flex, Icon } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useColorToggler } from "../hooks/useColorToggler";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BottomNav = () => {
	const colorToggler = useColorToggler();
	const {
		token,
		user: { username },
	} = useSelector((state) => state.auth);
	return (
		token && (
			<Flex
				justify="space-around"
				display={["flex", "flex", "none", "none"]}
				position="fixed"
				right="0"
				left="0"
				bottom="0"
				bg={colorToggler(800)}
				padding="4"
				boxShadow={"0 -5px 5px -5px #333"}
			>
				<Link to="/">
					<Icon
						as={AiOutlineHome}
						color={colorToggler(400)}
						className="icon-btn"
					/>
				</Link>
				<Link to="/explore" state={{ pageToShow: "explore" }}>
					<Icon
						as={MdOutlineExplore}
						color={colorToggler(400)}
						className="icon-btn"
					/>
				</Link>
				<Link to={`/profile/${username}`} state={{ pageToShow: "profile" }}>
					<Icon as={CgProfile} color={colorToggler(400)} className="icon-btn" />
				</Link>
				<Link to="/bookmarks" state={{ pageToShow: "bookmarks" }}>
					<Icon
						as={IoBookmarkOutline}
						color={colorToggler(400)}
						className="icon-btn"
					/>
				</Link>
			</Flex>
		)
	);
};
