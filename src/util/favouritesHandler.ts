import { SongType } from "../store/features/music/musicSlice";

type FavouritesType = {
	favourites: SongType[];
};

export const addSongToFavourites = (song: SongType): void => {
	const storedData = localStorage.getItem("favourites");
	let favourites: FavouritesType;

	if (storedData) {
		favourites = JSON.parse(storedData);
	} else {
		favourites = { favourites: [] };
	}

	favourites.favourites.push(song);
	localStorage.setItem("favourites", JSON.stringify(favourites));
};
