import "./App.css";
import { Box } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes/AppRoutes";
import { LikesListModal } from "./features";
import { useSelector } from "react-redux";

export const App = () => {
	const { openLikesList, likesList } = useSelector((state) => state.posts);
	return (
		<Box h="100vh">
			<AppRoutes />
			{openLikesList && <LikesListModal usersList={likesList} />}
			<ToastContainer theme="colored" autoClose={1000} position="bottom-left" />
		</Box>
	);
};
