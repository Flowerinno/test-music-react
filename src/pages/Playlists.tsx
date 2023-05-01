import React, { useEffect } from "react";
import MusicList from "../components/modules/Playlists/Playlists";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { fetchMusic } from "../store/features/music/musicSlice";

const Playlists: React.FC = () => {
	const dispatch = useAppDispatch();

	const songs = useAppSelector((state) => state.music?.playlists);

	useEffect(() => {
		if (songs?.length) dispatch(fetchMusic());
		return () => {};
	}, []);

	return <MusicList songs={songs} />;
};

export default Playlists;
