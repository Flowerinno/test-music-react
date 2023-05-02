import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../../../util/constants";

export const searchSongs = createAsyncThunk(
	"search/searchSongs",
	async (term: string) => {
		const response = await fetch(
			`https://shazam.p.rapidapi.com/search?term=${term}&locale=en-US&offset=0&limit=10'`,
			{
				method: "GET",
				headers: {
					"X-RapidAPI-Key": API_KEY,
					"X-RapidAPI-Host": "shazam.p.rapidapi.com",
				},
			}
		);

		const data = await response.json();

		return data;
	}
);

type suggestionsState = {
	tracks: {
		hits: {
			track: {
				title: string;
				subtitle: string;
				images: {
					coverart: string;
				};
			};
		}[];
	};
};

interface SearchState {
	loading: boolean;
	error: string | null;
	suggestions: suggestionsState | null;
}

const initialState: SearchState = {
	loading: false,
	error: null,
	suggestions: null,
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(searchSongs.pending, (state) => {
				state.loading = true;
				state.error = null;
				state.suggestions = null;
			})
			.addCase(searchSongs.fulfilled, (state, action) => {
				state.loading = false;
				state.suggestions = action.payload;
				state.error = null;
			})
			.addCase(searchSongs.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to search songs";
				state.suggestions = null;
			});
	},
});

export default searchSlice.reducer;
