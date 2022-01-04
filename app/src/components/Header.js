import '../styles/components/Header.css'

import { Container, Navbar, Nav } from 'react-bootstrap';
function Header() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container id="headerContainer" fluid>
                <Navbar.Brand href="#"><b>LEON SO</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#about"
                            // Define accessibility keyboard handler
                            onKeyDown={(e) => {
                                if (e.code == 'Space') {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.location.href = "#about";
                                }
                            }}
                        >
                            <b>ABOUT ME</b>
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            onKeyDown={(e) => {
                                if (e.code == 'Space') {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.location.href = "#skills";
                                }
                            }}
                        >
                            <b>SKILLS</b>
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            onKeyDown={(e) => {
                                if (e.code == 'Space') {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.location.href = "#projects";
                                }
                            }}
                        >
                            <b>PROJECTS</b>
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="mailto: sol4@mcmaster.ca"
                            onKeyDown={(e) => {
                                if (e.code == 'Space') {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.location.href = "mailto: sol4@mcmaster.ca";
                                }
                            }}
                        >
                            <b>EMAIL</b>
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.linkedin.com/in/leon-so/"
                            target="_blank"
                            onKeyDown={(e) => {
                                if (e.code == 'Space') {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.open(
                                        "https://www.linkedin.com/in/leon-so/",
                                        "_blank" // Open in a new window
                                    );
                                }
                            }}
                        >
                            <b>LINKEDIN</b>
                        </Nav.Link>
                        <Nav.Link
                            href="https://github.com/LeonSo7"
                            target="_blank"
                            onKeyDown={(e) => {
                                if (e.code == 'Space') {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.open(
                                        "https://github.com/leonso7",
                                        "_blank" // Open in a new window
                                    );
                                }
                            }}
                        >
                            <b>GITHUB</b>
                        </Nav.Link>
                        <Nav.Link
                            href="/uploads/Leon So - Resume.pdf"
                            target="_blank"
                            onKeyDown={(e) => {
                                if (e.code == 'Space') {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    window.open(
                                        "/uploads/Leon So - Resume.pdf",
                                        "_blank" // Open in a new window
                                    );
                                }
                            }}
                        >
                            <b>RESUME</b>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;