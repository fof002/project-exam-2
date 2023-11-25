import { VenueCard } from "../../venueCard/Index";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants";
import { getServiceMeta } from "./ServiceMeta";
import { LoaderGrowing } from "../../GraphicEffects/LoaderGrowing";
import { ErrorOccured } from "../../GraphicEffects/Error";
import { deleteVenue } from "../../../pages/yourVenues/deleteVenue";

export function GetVenues() {
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = user.accessToken;
  const name = user.name;
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(
          BASE_URL + `profiles/${name}/venues?sort=created&_bookings=true`,
          {
            method: "GET",
            headers: {
              Authorization: `bearer ${accessToken}`,
              "Content-type": "application/json;charset=UTF-8",
            },
          }
        );
        const json = await response.json();
        setVenues(json);
        console.log(json);
        if (json.length === 0) {
          <div
            id="main-container"
            className="d-flex gap-4 flex-wrap justify-content-center"
          >
            You dont have any venues yet
          </div>;
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [accessToken, name]);

  if (isLoading) {
    return <LoaderGrowing />;
  }
  if (isError) {
    return (
      <ErrorOccured message="An error occured while loading your venues" />
    );
  }
  return venues.length === 0 ? (
    <div
      id="main-container"
      className="d-flex gap-4 flex-wrap justify-content-center"
    >
      No venues found
    </div>
  ) : (
    <div
      id="main-container"
      className="d-flex gap-4 flex-wrap justify-content-center"
    >
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          owner={true}
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
          deleteVenue={deleteVenue}
          bookings={venue.bookings}
        />
      ))}
    </div>
  );
}
