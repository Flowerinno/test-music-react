import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const itemList = [
	{ id: 1, name: "Item 1" },
	{ id: 2, name: "Item 2" },
	{ id: 3, name: "Item 3" },
	{ id: 4, name: "Item 4" },
	{ id: 5, name: "Item 5" },
	{ id: 6, name: "Item 6" },
	{ id: 7, name: "Item 7" },
	{ id: 8, name: "Item 8" },
	{ id: 9, name: "Item 9" },
	{ id: 10, name: "Item 10" },
];

const HorizontalList = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<ListGroup horizontal className="overflow-auto flex-nowrap">
						{itemList.map((item) => (
							<ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default HorizontalList;
