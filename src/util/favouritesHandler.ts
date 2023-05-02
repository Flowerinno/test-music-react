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

export const getFavourites = (): SongType[] | null => {
	const storedData = localStorage.getItem("favourites");
	let favourites: FavouritesType;

	if (storedData) {
		favourites = JSON.parse(storedData);
		return favourites.favourites;
	} else {
		return null;
	}
};

export const removeSongFromFavourites = (song: SongType): void => {
	const storedData = localStorage.getItem("favourites");
	let favourites: FavouritesType;

	if (storedData) {
		favourites = JSON.parse(storedData);
		favourites.favourites = favourites.favourites.filter(
			(s) => s.title !== song.title
		);
		localStorage.setItem("favourites", JSON.stringify(favourites));
	}
};
