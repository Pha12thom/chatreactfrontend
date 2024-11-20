import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Add your form validation or submission logic here
        // Example: Show error if the form is incomplete
        const isFormValid = true; // Replace with actual validation logic
        if (!isFormValid) {
            setShowError(true);
        }
    };

    return (
        <>
            <Row
                className="justify-content-md-center align-items-center"
                style={{ height: "70vh", padding: "0 15px" }}
            >
                <Col xs={12} md={6}>
                    {showError && (
                        <Alert
                            variant="danger"
                            onClose={() => setShowError(false)}
                            dismissible
                        >
                            <p>An error occurred. Please check your input.</p>
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" required />
                        </Form.Group>
                        <div className="d-flex gap-2">
                            <Button variant="primary" type="submit" style={{ backgroundColor: "black" }}>
                                Register
                            </Button>

                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="secondary"
                                    type="button"
                                    style={{ backgroundColor: "orange" }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Register;
