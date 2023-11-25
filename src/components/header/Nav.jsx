import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SearchBar } from "./search/SearchBar";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CheckIfLoggedInDropdown } from "./CheckIfLoggedInDropdown";
import { CheckIfLoggedIn } from "./CheckIfLoggedInLogin";
import { useState } from "react";

export function NavComponent() {
  const [icon, setIcon] = useState(faMagnifyingGlass);

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
          <CheckIfLoggedInDropdown />
          <CheckIfLoggedIn />
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {
            icon === faMagnifyingGlass
              ? setIcon(faX)
              : setIcon(faMagnifyingGlass);
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={icon} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
