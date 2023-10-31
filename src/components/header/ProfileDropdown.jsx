import { NavDropdown } from "react-bootstrap";

export function ProfileDropdown() {
  return (
    <NavDropdown title="Profile" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Your bookings</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Change avatar</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Your venues</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
    </NavDropdown>
  );
}
