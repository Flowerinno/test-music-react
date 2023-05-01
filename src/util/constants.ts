import HomeIcon from "../assets/home.png";
import SearchIcon from "../assets/search.png";
import FavouritesIcon from "../assets/star.png";
import PlaylistsIcon from "../assets/queue.png";

export const NAV_LINKS = [
	{
		name: "Home",
		icon: HomeIcon,
	},
	{
		name: "Search",
		icon: SearchIcon,
	},
	{
		name: "Favourites",
		icon: FavouritesIcon,
	},
	{
		name: "Playlists",
		icon: PlaylistsIcon,
	},
];

export const API_URL =
	"https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US";

export const API_KEY = "03e7abe714msh6ae8f21d00787e9p1960eejsnc01bd4807a46";
