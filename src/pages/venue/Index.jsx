import { DatePicker } from "@mui/x-date-pickers";
import { GetSingleVenue } from "../../components/api/get/GetSingleVenue";

export function Venue() {
  return (
    <div>
      <DatePicker label="From" /> <DatePicker label="To" />
      <GetSingleVenue />
    </div>
  );
}
