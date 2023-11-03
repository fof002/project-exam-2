import { GetVenues } from "../../components/api/get/GetVenues";

export function HomePage() {
  return (
    <div>
      <h1 className="border-bottom border-primary pb-3 mb-3 text-center">
        Holidaze - Dream Venues
      </h1>
      <GetVenues />
    </div>
  );
}
