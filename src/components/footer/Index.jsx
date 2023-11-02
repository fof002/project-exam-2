import { Link } from "react-router-dom";

export function FooterComponent() {
  return (
    <footer className="py-3 bg-primary text-white">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link className="text-decoration-none" to="/">
            <div className="nav-link px-2 text-white">Home</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none" to="/about">
            <div className="nav-link px-2 text-white">About</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none" to="/venues">
            <div className="nav-link px-2 text-white">Venues</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="text-decoration-none" to="/bookings">
            <div className="nav-link px-2 text-white">Your bookings</div>
          </Link>
        </li>
      </ul>
      <p className="text-center ">© 2023 Holiday - Dream Venues</p>
    </footer>
  );
}
