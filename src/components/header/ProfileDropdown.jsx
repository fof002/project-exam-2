import { NavDropdown } from "react-bootstrap";

export function ProfileDropdown() {
  return (
    <NavDropdown title="Profile" id="basic-nav-dropdown">
      <NavDropdown.Item href="/bookings">Your bookings</NavDropdown.Item>
      <NavDropdown.Item href="#">Change avatar</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/venues">Your venues</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#">Log out</NavDropdown.Item>
    </NavDropdown>
  );
}
