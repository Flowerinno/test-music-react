import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

const Observer: React.FC<any> = (): any => {
	const { keycloak } = useKeycloak();

	const isLoggedIn = keycloak?.authenticated;

	const location = useLocation();
	const currentUrl = location.pathname;

	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn && currentUrl !== "signup") {
			navigate("/login");
		}
	}, [isLoggedIn, currentUrl]);
};

export default Observer;
