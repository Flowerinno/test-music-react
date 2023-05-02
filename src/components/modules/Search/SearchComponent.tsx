import React, { useState, useEffect } from "react";

import { Image, ListGroup } from "react-bootstrap";

import { searchSongs } from "../../../store/features/search/searchSlice";

import { useAppDispatch, useAppSelector } from "../.././../store/hooks";

import "./SearchComponent.scss";

const SearchComponent: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const searchResults = useAppSelector((state) => state.search.suggestions);

	const dispatch = useAppDispatch();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target?.value);
	};

	useEffect(() => {
		if (searchTerm.length > 0) {
			console.log(searchTerm);
			dispatch(searchSongs(searchTerm));
		}
	}, [searchTerm]);

	console.log(searchResults);

	return (
		<div className="search_container">
			<input
				type="text"
				onChange={handleInputChange}
				value={searchTerm}
				placeholder="Search for any song you'd like"
			/>
			{!searchResults ? (
				<p>Start typing to find some music!</p>
			) : (
				<ListGroup className="search_list">
					{searchResults?.tracks.hits.map((song, index) => (
						<ListGroup.Item key={index} className="search_item">
							<Image
								src={song.track.images.coverart}
								alt={song.track.title}
								className="search_img"
							/>
							<div className="search_description">
								<p>{song.track.title}</p>
								<span>{song.track.subtitle}</span>
							</div>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</div>
	);
};

export default SearchComponent;
