import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// Dynamically set the basename using the URL pathname's first segment if deployed in a subdirectory
const basename = window.location.pathname.split("/")[1]
	? `/${window.location.pathname.split("/")[1]}`
	: "";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter basename={basename}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
