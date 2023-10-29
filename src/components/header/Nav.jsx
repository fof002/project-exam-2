import { ProfileDropdown } from "./ProfileDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SearchBar } from "./SearchBar";

export function NavVenue() {
  return (
    <Navbar expand="lg" className="bg-primary" bg="light" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <ProfileDropdown />
            <Nav.Link className="text-white" href="#link">
              About
            </Nav.Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
