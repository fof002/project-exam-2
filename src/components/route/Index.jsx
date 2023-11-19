import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home/Index";
import { About } from "../../pages/about/Index";
import { Layout } from "../layout/Index";
import { Bookings } from "../../pages/bookings/Index";
import { CreateUserComponent } from "../../pages/create-user/Index";
import { Venue } from "../../pages/venue/Index";
import { LoginPage } from "../../pages/login/Index";
import { YourVenues } from "../../pages/yourVenues/Index";

export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/your-venues" element={<YourVenues />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-user" element={<CreateUserComponent />} />
        <Route path="/venue/:id" element={<Venue />} />
      </Route>
    </Routes>
  );
}
