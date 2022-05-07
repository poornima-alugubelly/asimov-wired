import "./App.css";
import { Box } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "./components";
import { Home } from "./pages/Home";
import { BottomNav } from "./components";
import { AppRoutes } from "./routes/AppRoutes";
export const App = () => {
	return (
		<Box h="100vh">
			<NavBar />
			<AppRoutes />
			<ToastContainer theme="colored" autoClose={1000} position="bottom-left" />
			<BottomNav />
		</Box>
	);
};
