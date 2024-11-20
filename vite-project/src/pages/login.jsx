import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom"; // Make sure to import Link

const Login = () => {
    const [showError, setShowError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Example of form validation logic
        if (!email || !password) {
            setShowError(true);
            return; // Stop form submission if validation fails
        }

        // Add your form submission logic here (e.g., API call)
        setShowError(false); // Hide error if validation passes
    };

    return (
        <>
            <Row
                className="justify-content-md-center align-items-center"
                style={{ height: "70vh", padding: "0 15px" }}
            >
                <Col xs={12} md={6}>
                    {showError && (
                        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                            <p>An error occurred. Please check your input.</p>
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </Form.Group>
                        <div className="d-flex gap-2">
                            <Button variant="primary" type="submit" style={{ backgroundColor: "orange" }}>
                                Login
                            </Button>
                            <Link to="/register" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="secondary"
                                    type="button"
                                    style={{ backgroundColor: "black" }}
                                >
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Login;
