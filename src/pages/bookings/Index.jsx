import { GetBookings } from "../../components/api/get/getBookings";

export function Bookings() {
  return (
    <div style={{ width: "100%" }}>
      <h1 className="border-bottom border-primary pb-3 mb-3 text-center">
        Your Bookings
      </h1>
      <GetBookings />
    </div>
  );
}
