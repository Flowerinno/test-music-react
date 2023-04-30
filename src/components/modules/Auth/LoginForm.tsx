import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

import { useEffect } from "react";

const LoginForm = (): any => {
	const { keycloak, initialized } = useKeycloak();

	console.log(keycloak.authenticated);
	useEffect(() => {
		if (!keycloak.authenticated && initialized) {
			keycloak.login({ redirectUri: `${window.location.origin}/home` });
		}
	}, [keycloak.authenticated]);
};

export default LoginForm;
