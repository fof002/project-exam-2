import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function CheckIfLoggedInLogin() {
  return localStorage.getItem("user") ? (
    ""
  ) : (
    <LinkContainer to="/login">
      <Nav.Link
        className=" d-flex align-items-center rounded p-1 pe-3 color-primary bg-white"
        id="login"
        href="#"
      >
        <FontAwesomeIcon
          icon={faRightToBracket}
          style={{ position: "relative", top: "0.06em" }}
        />
        Login
      </Nav.Link>
    </LinkContainer>
  );
}
