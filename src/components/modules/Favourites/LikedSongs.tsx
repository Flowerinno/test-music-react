import React, { useEffect, useState } from "react";
import { ListGroup, Image } from "react-bootstrap";

import "./LikedSongs.scss";

import {
	getFavourites,
	removeSongFromFavourites,
} from "../../../util/favouritesHandler";
import { SongType } from "../../../store/features/music/musicSlice";

const LikedSongs: React.FC = () => {
	const [likedSongs, setLikedSongs] = useState<SongType[] | null>(null);

	useEffect(() => {
		setLikedSongs(getFavourites);
	}, []);

	const deleteHandler = (song: SongType) => {
		removeSongFromFavourites(song);
		setLikedSongs((prevLikedSongs) => {
			if (!prevLikedSongs) {
				return [];
			} else {
				return prevLikedSongs?.filter((s) => s.title !== song.title);
			}
		});
	};

	if (likedSongs?.length === 0) {
		return (
			<div className="empty_fav">
				<h1>Nothing here yet</h1>
				<p>
					Go to the <span style={{ fontWeight: "bold" }}>Playlists</span> tab
					and add some songs to your collection
				</p>
			</div>
		);
	}

	return (
		<div className="fav_container">
			<h1>My collection</h1>
			<ListGroup className="fav_wrapper">
				{likedSongs?.map((song, index) => (
					<ListGroup.Item key={index} className="fav_item">
						<Image
							src={song.images?.background}
							alt={song.title}
							className="fav_image"
						/>
						<div className="fav_description">
							<p>{song.title}</p>
							<span style={{ fontWeight: "bold" }}>{song.subtitle}</span>
							<span className="remove_fav" onClick={() => deleteHandler(song)}>
								❌
							</span>
						</div>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};

export default LikedSongs;
