import { Footer } from "../footer/Index";
import { Header } from "../header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
