import { Container, Navbar as BootstrapNavbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
    return (
        <BootstrapNavbar bg="dark" expand="lg" className="mb-4" style={{ height: "5rem" }}>
            <Container gap={3}>
                <h2>
                    <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
                        Chat App
                    </Link>
                </h2>
                <span className="text-warning">Welcome Milugo</span>
                <Stack direction="horizontal" gap={3}>
                    <Link to="/register" className="text-white" style={{ textDecoration: "none" }}>
                        Register
                    </Link>
                    <Link to="/login" className="text-white" style={{ textDecoration: "none" }}>
                        Login
                    </Link>
                </Stack>
            </Container>
        </BootstrapNavbar>
    );
}

export default CustomNavbar;
