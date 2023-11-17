import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  faArrowRightFromBracket,
  faUserPlus,
  faPersonWalkingLuggage,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VenueManager } from "./VenueManager";
import { ChangeAvatar } from "./ChangeAvatar";
import { useState } from "react";

const user = JSON.parse(localStorage.getItem("user"));

export function ProfileDropdown() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className="d-flex align-items-center">
        <img
          id="avatarImage"
          alt="Profile image"
          height={25}
          width={25}
          className="rounded-circle"
          src={user.avatar}
        ></img>
        <NavDropdown title={user.name} id="basic-nav-dropdown">
          <LinkContainer to="/bookings">
            <NavDropdown.Item
              className="d-flex align-items-center gap-1"
              href="#"
            >
              <FontAwesomeIcon icon={faPersonWalkingLuggage} />
              <div>Your bookings</div>
            </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item
            className="d-flex align-items-center gap-1"
            href="#"
          >
            <FontAwesomeIcon icon={faCalendarCheck} />
            <div>Book a venue</div>
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => setModalShow(true)}
            className="d-flex align-items-center gap-1"
            href="#"
          >
            <FontAwesomeIcon icon={faUserPlus} /> <div>Change avatar</div>
          </NavDropdown.Item>
          {JSON.parse(localStorage.getItem("user")).venueManager === true ? (
            <VenueManager />
          ) : (
            ""
          )}
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
      </div>
      <ChangeAvatar onHide={() => setModalShow(false)} show={modalShow} />
    </div>
  );
}
