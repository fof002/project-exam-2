import { Link } from "react-router-dom";

export function FooterComponent() {
  return (
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <Link to="/">
            <div href="#" class="nav-link px-2 text-body-secondary">
              Home
            </div>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/about">
            <div class="nav-link px-2 text-body-secondary">About</div>
          </Link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            Venues
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-body-secondary">
            Your bookings
          </a>
        </li>
      </ul>
      <p class="text-center text-body-secondary">
        © 2023 Holiday - Dream Venues
      </p>
    </footer>
  );
}
