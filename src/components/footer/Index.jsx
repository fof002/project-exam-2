import { Link } from "react-router-dom";

export function FooterComponent() {
  return (
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <Link className="text-decoration-none" to="/">
            <div href="#" class="nav-link px-2 text-body-secondary">
              Home
            </div>
          </Link>
        </li>
        <li class="nav-item">
          <Link className="text-decoration-none" to="/about">
            <div class="nav-link px-2 text-body-secondary">About</div>
          </Link>
        </li>
        <li class="nav-item">
          <Link className="text-decoration-none" to="/venues">
            <div class="nav-link px-2 text-body-secondary">Venues</div>
          </Link>
        </li>
        <li class="nav-item">
          <Link className="text-decoration-none" to="/bookings">
            <div class="nav-link px-2 text-body-secondary">Your bookings</div>
          </Link>
        </li>
      </ul>
      <p class="text-center text-body-secondary">
        © 2023 Holiday - Dream Venues
      </p>
    </footer>
  );
}
