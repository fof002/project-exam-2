import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home/Index";
import { About } from "../../pages/about/Index";
import { Layout } from "../layout/Index";
import { Venues } from "../../pages/venues/Index";
import { Bookings } from "../../pages/bookings/Index";
import { LoginForm } from "../../pages/login/LoginForm";
import { CreateUser } from "../../pages/create-user/Index";

export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Route>
    </Routes>
  );
}
