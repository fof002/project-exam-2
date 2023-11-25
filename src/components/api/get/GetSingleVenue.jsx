import { SingleVenueCard } from "../../singleVenueCard/SingleVenueCard";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants";
import { useParams } from "react-router-dom";
import { getServiceMeta } from "./ServiceMeta";
import { LoaderGrowing } from "../../GraphicEffects/LoaderGrowing";
import { ErrorOccured } from "../../GraphicEffects/Error";

export function GetVenue() {
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let params = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(
          BASE_URL + "venues/" + params.id + "?_bookings=true"
        );
        const json = await response.json();
        setVenue(json);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [params.id]);

  if (!venue) {
    return null;
  }
  if (isLoading) {
    return <LoaderGrowing />;
  }
  if (isError) {
    return (
      <ErrorOccured message="An error occured while loading your venues" />
    );
  }
  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      <SingleVenueCard
        key={venue.id}
        venueName={venue.name}
        venueUrl={venue.media[0]}
        venueDescription={venue.description}
        venuePrice={venue.price}
        address={venue.location.address}
        city={venue.location.city}
        country={venue.location.country}
        maxGuests={venue.maxGuests}
        services={getServiceMeta(venue.meta)}
        venueId={venue.id}
        rating={venue.rating}
        setReservedDates={venue.bookings}
        lng={venue.location.lng}
        lat={venue.location.lat}
        continent={venue.location.continent}
      />
    </div>
  );
}
