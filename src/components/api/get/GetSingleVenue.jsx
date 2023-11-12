import { SingleVenueCard } from "../../singleVenueCard/SingleVenueCard";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants";
import { useParams } from "react-router-dom";
import { getServiceMeta } from "./ServiceMeta";

export function GetVenue() {
  const [venue, setVenue] = useState(null);
  let params = useParams();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        BASE_URL + "venues/" + params.id + "?_bookings=true"
      );
      const json = await response.json();
      setVenue(json);
      console.log(json);
    }
    getData();
  }, [params.id]);

  if (!venue) {
    return null;
  }

  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      <SingleVenueCard
        key={venue.id}
        venueName={venue.name}
        venueUrl={venue.media}
        venueDescription={venue.description}
        venuePrice={venue.price}
        address={venue.location.address}
        city={venue.location.city}
        country={venue.location.country}
        maxGuests={venue.maxGuests}
        services={getServiceMeta(venue.meta)}
        venueId={venue.id}
      />
    </div>
  );
}
