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
        <NavDropdown.Item className="d-flex align-items-center gap-2" href="#">
          <FontAwesomeIcon icon={faPersonWalkingLuggage} />
          <div>Your bookings</div>
        </NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item className="d-flex align-items-center gap-2" href="#">
        <FontAwesomeIcon icon={faUserPlus} /> <div>Change avatar</div>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <LinkContainer to="/venues">
        <NavDropdown.Item
          className="d-flex align-items-center gap-2"
          href="/venues"
        >
          <FontAwesomeIcon icon={faUtensils} />
          <div>Your venues</div>
        </NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <NavDropdown.Item className="d-flex align-items-center gap-2" href="#">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <div>Log out</div>
      </NavDropdown.Item>
    </NavDropdown>
  );
}
