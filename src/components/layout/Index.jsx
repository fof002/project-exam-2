import { FooterComponent } from "../footer/Index";
import { HeaderComponent } from "../header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div id="fullContainer">
      <div>
        <HeaderComponent />
        <div className="d-flex flex-column align-items-center mt-4 ms-3 me-3">
          <main
            id="mainContainer"
            className="d-flex flex-column align-items-center"
            style={{ width: "min(60em,100%)" }}
          >
            <Outlet />
          </main>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
