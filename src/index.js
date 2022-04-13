import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { makeServer } from "./server";
import { theme } from "./themes";
import "@fontsource/rajdhani/500.css";
import "@fontsource/chakra-petch/600.css";
import { ChakraProvider } from "@chakra-ui/react";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
