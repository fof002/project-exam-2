import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  faArrowRightFromBracket,
  faUserPlus,
  faUtensils,
  faPersonWalkingLuggage,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const user = JSON.parse(localStorage.getItem("user"));

export function ProfileDropdown() {
  return (
    <NavDropdown title={user.name} id="basic-nav-dropdown">
      <LinkContainer to="/bookings">
        <NavDropdown.Item className="d-flex align-items-center gap-1" href="#">
          <FontAwesomeIcon icon={faPersonWalkingLuggage} />
          <div>Your bookings</div>
        </NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item className="d-flex align-items-center gap-1" href="#">
        <FontAwesomeIcon icon={faCalendarCheck} />
        <div>Book a venue</div>
      </NavDropdown.Item>
      <NavDropdown.Item className="d-flex align-items-center gap-1" href="#">
        <FontAwesomeIcon icon={faUserPlus} /> <div>Change avatar</div>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <LinkContainer to="/venues">
        <NavDropdown.Item
          className="d-flex align-items-center gap-1"
          href="/venues"
        >
          <FontAwesomeIcon
            icon={faUtensils}
            style={{ position: "relative", top: "0.15em" }}
          />
          <div>Your venues</div>
        </NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <NavDropdown.Item
        className="d-flex align-items-center gap-1"
        href="#"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.assign("/");
        }}
      >
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          style={{ position: "relative", top: "0.15em" }}
        />
        <div>Log out</div>
      </NavDropdown.Item>
    </NavDropdown>
  );
}
