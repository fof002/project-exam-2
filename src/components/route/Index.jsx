import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home/Index";
import { About } from "../../pages/about/Index";
import { Layout } from "../layout/Index";

export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
