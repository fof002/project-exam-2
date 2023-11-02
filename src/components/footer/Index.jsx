import { Link } from "react-router-dom";

export function FooterComponent() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link className="text-decoration-none" to="/">
            <div className="nav-link px-2 text-body-secondary">Home</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none" to="/about">
            <div className="nav-link px-2 text-body-secondary">About</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none" to="/venues">
            <div className="nav-link px-2 text-body-secondary">Venues</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none" to="/bookings">
            <div className="nav-link px-2 text-body-secondary">
              Your bookings
            </div>
          </Link>
        </li>
      </ul>
      <p className="text-center text-body-secondary">
        © 2023 Holiday - Dream Venues
      </p>
    </footer>
  );
}
