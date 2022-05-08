import { Flex, Icon } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useColorToggler } from "../hooks/useColorToggler";
import { useSelector } from "react-redux";

export const BottomNav = () => {
	const colorToggler = useColorToggler();
	const { token } = useSelector((state) => state.auth);
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
				<Icon
					as={AiOutlineHome}
					color={colorToggler(400)}
					className="icon-btn"
				/>
				<Icon as={BiHash} color={colorToggler(400)} className="icon-btn" />
				<Icon as={CgProfile} color={colorToggler(400)} className="icon-btn" />
			</Flex>
		)
	);
};
