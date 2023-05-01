import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, API_URL } from "../../../util/constants";

export type SongType = {
	title?: string;
	subtitle?: string;
	images?: {
		background?: string;
	};
};

type MusicStateType = {
	playlists: SongType[] | null;
};

const initialState: MusicStateType = {
	playlists: null,
};

export const fetchMusic = createAsyncThunk(
	"music/fetchFavouriteSongs",
	async () => {
		try {
			const response = await fetch(API_URL, {
				method: "GET",
				headers: {
					"X-RapidAPI-Key": API_KEY,
					"X-RapidAPI-Host": "shazam.p.rapidapi.com",
				},
			});
			const result = await response.json();

			return result.tracks;
		} catch (error) {
			console.log(error);
		}
	}
);

export const musicSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMusic.fulfilled, (state, action) => {
			state.playlists = action.payload;
		});
	},
});

export default musicSlice.reducer;
