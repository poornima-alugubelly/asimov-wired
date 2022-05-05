import "./App.css";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./components";
import { Home } from "./pages/Home";
import { BottomNav } from "./components";
import { AppRoutes } from "./routes/AppRoutes";
export const App = () => {
	return (
		<Box h="100vh">
			<NavBar />
			<AppRoutes />
			<BottomNav />
		</Box>
	);
};
