import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import musicReducer from "./features/music/musicSlice";
import searchReducer from "./features/search/searchSlice";

export const store = configureStore({
	reducer: {
		search: searchReducer,
		music: musicReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
