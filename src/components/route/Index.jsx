import { Route, Routes } from "react-router-dom";
import { Venue } from "../../pages/venue/Index";
import { Venues } from "../../pages/venues/Index";
import { HomePage } from "../../pages/home/Home";
import { About } from "../../pages/about/Index";
import { Layout } from "../layout/Index";

export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="venue" element={<Venue />} />
        <Route path="venues" element={<Venues />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
