import { useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";

const SignupForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log({ name, email, password });
	};

	const loginRedirect = () => {
		navigate("/login");
	};

	return (
		<Form onSubmit={handleSubmit} className="signup-form">
			<h2>Sign up</h2>
			<Form.Group controlId="name">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</Form.Group>

			<Form.Group controlId="email">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</Form.Group>

			<Form.Group controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</Form.Group>
			<ButtonGroup className="buttons">
				<Button variant="primary" type="submit">
					Sign up
				</Button>
				<Button onClick={loginRedirect}>Login</Button>
			</ButtonGroup>
		</Form>
	);
};

export default SignupForm;
