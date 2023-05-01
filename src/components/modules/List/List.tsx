import { ListGroup } from "react-bootstrap";

import { SongType } from "../../../store/features/music/musicSlice";

import "./List.scss";
interface HorizontalListProps {
	heading?: string;
	songs?: SongType[];
}

const HorizontalList: React.FC<HorizontalListProps> = ({ heading, songs }) => {
	
	return (
		<div className="container">
			{heading && (
				<div className="heading">
					<p>{heading}</p>
					<span>🔥</span>
				</div>
			)}
			<ListGroup horizontal className="horizontal_list">
				{songs?.map((song, index) => (
					<div className="horizontal_list_song" key={index}>
						<ListGroup.Item
							className="hl_item"
							variant="dark"
							style={{ backgroundImage: `url(${song.images?.background})` }}
						></ListGroup.Item>
						<span className="song_title">{song.title}</span>
					</div>
				))}
			</ListGroup>
		</div>
	);
};

export default HorizontalList;
