import { Box, Text } from "@chakra-ui/react";
import { SortButtons } from "./SortButtons";

export const SortPosts = () => {
	return (
		<Box mb="2">
			<Text mb="2" fontSize="xl">
				Sort By
			</Text>
			<SortButtons />
		</Box>
	);
};
