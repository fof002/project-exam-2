import { Link } from "react-router-dom";
import { YourBookingsFooter } from "./YourBookingsFooter";

export function FooterComponent() {
  return (
    <footer className="py-3 mt-3 bg-primary text-white">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link className="text-decoration-none" to="/">
            <div className="nav-link px-2 text-white">Home</div>
          </Link>
        </li>
        <YourBookingsFooter />
      </ul>
      <p className="text-center ">© 2023 Holiday - Dream Venues</p>
    </footer>
  );
}
