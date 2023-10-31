import { HeaderComponent } from "../header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
}
