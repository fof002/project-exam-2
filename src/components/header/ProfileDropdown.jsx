import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function ProfileDropdown() {
  return (
    <NavDropdown title="Profile" id="basic-nav-dropdown">
      <LinkContainer to="/bookings">
        <NavDropdown.Item href="#">Your bookings</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item href="#">Change avatar</NavDropdown.Item>
      <NavDropdown.Divider />
      <LinkContainer to="/venues">
        <NavDropdown.Item href="/venues">Your venues</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#">Log out</NavDropdown.Item>
    </NavDropdown>
  );
}
