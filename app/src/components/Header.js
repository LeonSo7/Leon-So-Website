import '../styles/components/Header.css'

import { Container, Navbar, Nav } from 'react-bootstrap';
function Header() {
    return (
        <Navbar fixed collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container id="headerContainer" fluid>
                <Navbar.Brand href="#home">LEON SO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">ABOUT ME</Nav.Link>
                        <Nav.Link href="#pricing">EXPERIENCE</Nav.Link>
                        <Nav.Link href="#pricing">SKILLS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar>
                    <Nav className="m-auto">
                        <Nav.Link href="#deets">EMAIL</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            LINKEDIN
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    )
}

export default Header;