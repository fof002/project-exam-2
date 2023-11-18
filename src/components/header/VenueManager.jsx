import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AddVenue } from "./Add venue/Index";

export function VenueManager() {
  const [modalShowVenue, setModalVenue] = useState(false);

  return (
    <div>
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
      <NavDropdown.Item
        className="d-flex align-items-center gap-1"
        href=""
        onClick={() => setModalVenue(true)}
      >
        <FontAwesomeIcon
          icon={faFolderPlus}
          style={{ position: "relative", top: "0.15em" }}
        />
        <div>Add venue</div>
      </NavDropdown.Item>
      <AddVenue onHide={() => setModalVenue(false)} show={modalShowVenue} />
    </div>
  );
}
