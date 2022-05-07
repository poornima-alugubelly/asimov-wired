import { Grid, GridItem, Center, Divider, Box } from "@chakra-ui/react";
import { SideNav } from "../components";
import { PostCard } from "./components/PostCard";
import { SuggestedProfiles } from "./components/SuggestedProfiles";
import { useColorToggler } from "../hooks/useColorToggler";

export const Home = () => {
	const colorToggler = useColorToggler();
	return (
		<Box maxW="90vw" pt="20" m="auto">
			<Grid
				templateColumns={["1fr", "1fr", "repeat(4,1fr)", "repeat(5, 1fr)"]}
				gap={4}
				h="full"
			>
				<GridItem colSpan={1} display={["none", "none", "block", "block"]}>
					<SideNav />
				</GridItem>

				<GridItem
					colStart={2}
					colSpan={3}
					borderRight="1px solid"
					borderLeft="1px solid"
					borderColor={colorToggler(400)}
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
						<>
							<Center>
								<PostCard />
							</Center>
							<Divider orientation="horizontal" color={colorToggler(400)} />
						</>
					))}
				</GridItem>
				<GridItem
					colStart={5}
					colSpan={1}
					display={["none", "none", "none", "block"]}
				>
					{" "}
					<SuggestedProfiles />
				</GridItem>
			</Grid>
		</Box>
	);
};
