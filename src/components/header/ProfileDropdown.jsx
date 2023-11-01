import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  faArrowRightFromBracket,
  faUserPlus,
  faUtensils,
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProfileDropdown() {
  return (
    <NavDropdown title="Profile" id="basic-nav-dropdown">
      <LinkContainer to="/bookings">
        <NavDropdown.Item href="#">
          <FontAwesomeIcon icon={faPersonWalkingLuggage} /> Your bookings
        </NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item href="#">
        <FontAwesomeIcon icon={faUserPlus} /> Change avatar
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <LinkContainer to="/venues">
        <NavDropdown.Item href="/venues">
          <FontAwesomeIcon icon={faUtensils} /> Your venues
        </NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#">
        <FontAwesomeIcon icon={faArrowRightFromBracket} /> Log out
      </NavDropdown.Item>
    </NavDropdown>
  );
}
