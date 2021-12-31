import '../styles/components/Header.css'

import { Container, Navbar, Nav } from 'react-bootstrap';
function Header() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="black" variant="dark">
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
                        <Nav.Link href="mailto: sol4@mcmaster.ca"><b>EMAIL</b></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/leon-so/">
                            <b>LINKEDIN</b>
                        </Nav.Link>
                        <Nav.Link href="https://github.com/LeonSo7">
                            <b>GITHUB</b>
                        </Nav.Link>
                        <Nav.Link href="/uploads/Leon So - Resume.pdf">
                            <b>RESUME</b>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;