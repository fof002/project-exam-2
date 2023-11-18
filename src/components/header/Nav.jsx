import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SearchBar } from "./SearchBar";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { CheckIfLoggedInDropdown } from "./CheckIfLoggedInDropdown";
import { CheckIfLoggedIn } from "./CheckIfLoggedInLogin";

const user = JSON.parse(localStorage.getItem("user"));

export function NavComponent() {
  return (
    <Navbar expand="lg" className="bg-primary" bg="dark" data-bs-theme="light">
      <Container style={{ maxWidth: "100%" }}>
        <div className="d-flex align-items-center ">
          <Link to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="100"
                height="40"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </Link>
          <img
            id="avatarImage"
            alt="User profile"
            height={35}
            width={38}
            className="rounded-circle me-2"
            src={user.avatar}
          ></img>
          <CheckIfLoggedInDropdown />
          <CheckIfLoggedIn />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/about" className="me-2">
              <Nav.Link className="text-white" href="#">
                About
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
