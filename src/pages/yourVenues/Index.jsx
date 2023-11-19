import { GetVenues } from "../../components/api/get/GetYourVenues";

export function YourVenues() {
  return (
    <div style={{ width: "100%" }}>
      <h1 className="border-bottom border-primary pb-3 mb-3 text-center">
        Your Venues
      </h1>
      <GetVenues />
    </div>
  );
}
