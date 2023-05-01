import { Image } from "react-bootstrap";
import LogoPicture from "../../../assets/logo.jpg";

import "./Logo.scss";

const Logo = () => {
	return <Image src={LogoPicture} alt="logo picture" className="logo" />;
};

export default Logo;
