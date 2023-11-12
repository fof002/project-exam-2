import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export function VenueManager() {
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
      <LinkContainer to="/venues">
        <NavDropdown.Item
          className="d-flex align-items-center gap-1"
          href="/venues"
        >
          <FontAwesomeIcon
            icon={faFolderPlus}
            style={{ position: "relative", top: "0.15em" }}
          />
          <div>Add venue</div>
        </NavDropdown.Item>
      </LinkContainer>
    </div>
  );
}
