import { ProfileDropdown } from "./ProfileDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

export function CheckIfLoggedIn() {
  return localStorage.getItem("user") ? (
    <ProfileDropdown />
  ) : (
    <LinkContainer to="/login">
      <Nav.Link className="text-primary bg-white rounded" href="#">
        Login
      </Nav.Link>
    </LinkContainer>
  );
}
