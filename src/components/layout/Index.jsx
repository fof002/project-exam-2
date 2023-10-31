import { FooterComponent } from "../footer/Index";
import { HeaderComponent } from "../header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div id="fullContainer">
      <HeaderComponent />
      <main id="mainContainer">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}
