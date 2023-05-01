import React, { useEffect } from "react";
import HorizontalList from "../components/modules/List/List";
import Logo from "../components/modules/Logo/Logo";

import { useAppDispatch, useAppSelector } from "../store/hooks";

import "../styles/Home.scss";

import { fetchMusic } from "../store/features/music/musicSlice";

const Home: React.FC = () => {
	const dispatch = useAppDispatch();

	const musicData = useAppSelector((state) => state.music.playlists);

	useEffect(() => {
		dispatch(fetchMusic());
	}, []);

	return (
		<div className="home_container">
			<Logo />
			<div className="home_lists">
				<HorizontalList
					songs={musicData?.slice(0, 8)}
					heading="RELEASED THIS WEEK"
				/>
				<HorizontalList
					songs={musicData?.slice(9, 17)}
					heading="FEATURED PLAYLISTS"
				/>
			</div>
		</div>
	);
};

export default Home;
