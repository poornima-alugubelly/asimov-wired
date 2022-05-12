import {
	Text,
	List,
	ListItem,
	Center,
	HStack,
	VStack,
	Link,
	Icon,
} from "@chakra-ui/react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { useColorToggler } from "../hooks/useColorToggler";

export const Footer = () => {
	const colorToggler = useColorToggler();
	return (
		<footer>
			<VStack
				borderTop={"1px solid"}
				borderColor={colorToggler(400)}
				pb={["20", "20", "4", "4"]}
				pt="5"
			>
				<Text>Made by poornima</Text>

				<HStack>
					<Link href="https://github.com/poornima-alugubelly" isExternal>
						<Icon
							as={BsGithub}
							color={colorToggler(400)}
							className="icon-btn"
						/>
					</Link>

					<Link
						href="https://www.linkedin.com/in/poornima-alugubelly-aa13291b6/"
						isExternal
					>
						<Icon
							as={BsLinkedin}
							color={colorToggler(400)}
							className="icon-btn"
						/>
					</Link>

					<Link href="https://twitter.com/Moony_codes " isExternal>
						<Icon
							as={BsTwitter}
							color={colorToggler(400)}
							className="icon-btn"
						/>
					</Link>
				</HStack>
				<Text>© 2022 Asimov Creations</Text>
			</VStack>
		</footer>
	);
};
