import { Link } from "react-router-dom";

export function YourBookingsFooter() {
  return localStorage.getItem("user") !== null ? (
    <li className="nav-item">
      <Link className="text-decoration-none" to="/bookings">
        <div className="nav-link px-2 text-white">Your bookings</div>
      </Link>
    </li>
  ) : (
    ""
  );
}
