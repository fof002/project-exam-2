import { SingleVenueCard } from "../../singleVenueCard/SingleVenueCard";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants";
import { useParams } from "react-router-dom";

export function GetVenue() {
  const [venue, setVenue] = useState([]);
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
  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      <SingleVenueCard
        key={venue.id}
        name={venue.name}
        imageUrl={venue.media}
        description={venue.description}
        bookings={venue.bookings}
      />
    </div>
  );
}
