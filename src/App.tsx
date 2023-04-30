import { ThemeProvider } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Playlists from "./pages/Playlists";
import Search from "./pages/Search";
import Sidebar from "./components/modules/sidebar/Sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Observer from "./observer/Observer";

function App() {
	return (
		<ThemeProvider
			breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
			minBreakpoint="xxs"
		>
			<Observer />

			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>

			<Sidebar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favourites" element={<Favourites />} />
					<Route path="/playlists" element={<Playlists />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</Sidebar>
		</ThemeProvider>
	);
}

export default App;
