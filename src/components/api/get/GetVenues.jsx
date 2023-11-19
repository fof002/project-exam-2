import { VenueCard } from "../../venueCard/Index";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants";
import { getServiceMeta } from "./ServiceMeta";
import { ErrorOccured } from "../../GraphicEffects/Error";
import { LoaderGrowing } from "../../GraphicEffects/LoaderGrowing";

export function GetVenues() {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(BASE_URL + "venues?limit=12&sort=created");
        const json = await response.json();
        setVenues(json);
      } catch {
        setIsError(true);
        <ErrorOccured message="An error occured while loading venues. Please try again or contact us" />;
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  if (isLoading) {
    return <LoaderGrowing />;
  }
  if (isError) {
    return (
      <ErrorOccured message="An error occured while loading venues. Please try again or contact us" />
    );
  }
  return venues.length > 0 ? (
    <div className="d-flex gap-4 flex-wrap justify-content-center">
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          venueName={venue.name}
          venueUrl={venue.media[0]}
          venueDescription={
            venue.description.length > 100
              ? venue.description.substring(0, 100) + "..."
              : venue.description
          }
          venuePrice={venue.price}
          address={venue.location.address}
          city={venue.location.city}
          country={venue.location.country}
          maxGuests={venue.maxGuests}
          services={getServiceMeta(venue.meta)}
          venueId={venue.id}
          rating={venue.rating}
        />
      ))}
    </div>
  ) : (
    <ErrorOccured message="An error occured while loading venues. Please try again or contact us" />
  );
}
