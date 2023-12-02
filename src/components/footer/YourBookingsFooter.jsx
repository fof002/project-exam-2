import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export function YourBookingsFooter() {
  return localStorage.getItem("user") !== null ? (
    <li className="nav-item">
      <LinkContainer to="/bookings">
        <Link className="text-decoration-none" to="/bookings">
          <div className="nav-link px-2 text-white">Your bookings</div>
        </Link>
      </LinkContainer>
    </li>
  ) : (
    ""
  );
}
