import React from "react";
import { ListGroup, Image } from "react-bootstrap";

import "./Playlists.scss";

import { SongType } from "../../../store/features/music/musicSlice";

type PlaylistsProps = {
	songs?: SongType[] | null;
};

const MusicList: React.FC<PlaylistsProps> = ({ songs }) => {
	return (
		<ListGroup className="playlists_container">
			{songs?.map((song, index) => (
				<ListGroup.Item key={index} className="playlists_item">
					<Image
						src={song.images?.background}
						alt={song.title}
						className="playlists_image"
					/>
					<div className="description">
						<p>{song.title}</p>
						<span>{song.subtitle}</span>
						<span className="fav">🌟</span>
					</div>
				</ListGroup.Item>
			))}
		</ListGroup>
	);
};

export default MusicList;
