import React from "react";
import { Container, Image, Row, Col, Nav } from "react-bootstrap";
import { NAV_LINKS } from "../../../util/constants";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	return (
		<Row>
			<Col className="sidebar_wrapper">
				<Nav
					className="sidebar"
					activeKey="/home"
					onSelect={(selectedKey) => console.log(selectedKey)}
				>
					{NAV_LINKS.map((link) => {
						return (
							<Nav.Item key={link.name} className="sidebar_item">
								<Image src={link.icon} className="links_icon" width="20px" />
								<Link className="sidebar_link" to={`/${link.name}`}>
									{link.name}
								</Link>
							</Nav.Item>
						);
					})}
				</Nav>
			</Col>

			<Col className="children">{children}</Col>
		</Row>
	);
};

export default Sidebar;
