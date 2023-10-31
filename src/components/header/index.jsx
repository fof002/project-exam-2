import { NavVenue } from "./Nav";
import { RouteComponent } from "../route/Index";

export function Header() {
  return (
    <div>
      <NavVenue />
      <RouteComponent />
    </div>
  );
}
