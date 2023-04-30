import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

import keycloak from "./util/keycloack";
import { ReactKeycloakProvider } from "@react-keycloak/web";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<ReactKeycloakProvider authClient={keycloak}>
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	</ReactKeycloakProvider>
);
