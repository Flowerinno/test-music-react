import { useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import "./LoginForm.css";

const LoginForm = () => {
	const { keycloak, initialized } = useKeycloak();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	const signupRedirect = () => {
        navigate("/signup");
        keycloak.login();
	};

	return (
		<Form onSubmit={handleSubmit} className="login-form">
			<Form.Group>
				<Form.Label>Username or Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter username or email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>
			<ButtonGroup className="buttons">
				<Button type="submit">Submit</Button>
				<Button variant="secondary" type="button" onClick={signupRedirect}>
					Sign up
				</Button>
			</ButtonGroup>
		</Form>
	);
};

export default LoginForm;
