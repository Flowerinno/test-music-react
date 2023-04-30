import React from "react";
import { Container, Image, Row, Col, Nav } from "react-bootstrap";
import { NAV_LINKS } from "../../../util/constants";
import { Link } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({ children }: any) => {
	return (
		<Container className="container">
			<Nav
				className="sidebar"
				activeKey="/home"
				onSelect={(selectedKey) => console.log(selectedKey)}
			>
				{NAV_LINKS.map((link) => {
					return (
						<Nav.Item key={link.name} className="sidebar_item">
							<Image src={link.icon} width="20px" />
							<Link className="sidebar_link" to={`/${link.name}`}>
								{link.name}
							</Link>
						</Nav.Item>
					);
				})}
			</Nav>

			<Col className="children" md={4}>
				{children}
			</Col>
		</Container>
	);
};

export default Sidebar;
