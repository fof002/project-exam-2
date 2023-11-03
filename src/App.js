import { RouteComponent } from "./components/route/Index";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouteComponent />
    </LocalizationProvider>
  );
}

export default App;
