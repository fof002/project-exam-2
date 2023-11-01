import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ProfileDropdown() {
  return (
    <NavDropdown title="Profile" id="basic-nav-dropdown">
      <Link to="/bookings">Your bookings</Link>
      <NavDropdown.Item href="#">Change avatar</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/venues">Your venues</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#">Log out</NavDropdown.Item>
    </NavDropdown>
  );
}
