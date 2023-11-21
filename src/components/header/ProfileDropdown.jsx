import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  faArrowRightFromBracket,
  faUserPlus,
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VenueManager } from "./VenueManager";
import { ChangeAvatar } from "./ChangeAvatar";
import { useState } from "react";
import icon from "./icon.png";

const user = JSON.parse(localStorage.getItem("user"));

export function ProfileDropdown() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className="d-flex align-items-center">
        {user.avatar ? (
          <img
            id="avatarImage"
            alt="User profile"
            height={20}
            width={20}
            className="rounded-circle me-2"
            src={user.avatar}
          ></img>
        ) : (
          <img
            id="avatarImage"
            alt="User profile"
            height={20}
            width={20}
            className="rounded-circle me-2"
            src={icon}
          ></img>
        )}
        <NavDropdown
          title={user.name}
          style={{ fontSize: "1.1rem" }}
          id="basic-nav-dropdown"
        >
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
