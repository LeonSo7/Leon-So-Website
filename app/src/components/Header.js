import '../styles/components/Header.css'

import { Container, Navbar, Nav } from 'react-bootstrap';
function Header() {
    return (
        <Navbar fixed collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container id="headerContainer" fluid>
                <Navbar.Brand href="#"><b>LEON SO</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#features"><b>ABOUT ME</b></Nav.Link>
                        <Nav.Link href="#pricing"><b>EXPERIENCE</b></Nav.Link>
                        <Nav.Link href="#test"><b>SKILLS</b></Nav.Link>
                    </Nav> */}
                    <Nav className="ms-auto">
                        <Nav.Link href="#"><b>EMAIL</b></Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            <b>LINKEDIN</b>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            <b>GITHUB</b>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#">
                            <b>RESUME</b>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;