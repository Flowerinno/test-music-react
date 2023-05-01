import { ThemeProvider } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Playlists from "./pages/Playlists";
import Search from "./pages/Search";
import Sidebar from "./components/modules/sidebar/Sidebar";
import Login from "./pages/Login";

import { useKeycloak } from "@react-keycloak/web";

function App() {
	const { keycloak } = useKeycloak();

	const isLoggedIn = keycloak?.authenticated;

	return (
		<ThemeProvider
			breakpoints={["xl", "lg", "md", "sm", "xs"]}
			minBreakpoint="xs"
		>
			<Login />

			{isLoggedIn && (
				<Sidebar>
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/favourites" element={<Favourites />} />
						<Route path="/playlists" element={<Playlists />} />
						<Route path="/search" element={<Search />} />
					</Routes>
				</Sidebar>
			)}
		</ThemeProvider>
	);
}

export default App;
