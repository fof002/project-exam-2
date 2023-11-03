import { VenueCard } from "../../venueCard/Index";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants";

export function GetVenues() {
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(BASE_URL + "venues?limit=12");
      const json = await response.json();
      setVenues(json);
    }
    getData();
  }, []);
  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          venueName={venue.name}
          venueUrl={venue.media[0]}
        />
      ))}
    </div>
  );
}
