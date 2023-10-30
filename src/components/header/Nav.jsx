import { ProfileDropdown } from "./ProfileDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SearchBar } from "./SearchBar";
import logo from "./logo.png";

export function NavVenue() {
  return (
    <Navbar expand="lg" className="bg-primary" bg="dark" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
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
