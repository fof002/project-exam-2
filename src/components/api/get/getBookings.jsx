import { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants";
import { LoaderGrowing } from "../../GraphicEffects/LoaderGrowing";
import { ErrorOccured } from "../../GraphicEffects/Error";
import { BookingCard } from "../../bookingCard/Index";

export function GetBookings() {
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = user.accessToken;
  const name = user.name;
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(
          BASE_URL +
            `profiles/${name}/bookings?_venue=true&sort=dateFrom&sortOrder=asc`,
          {
            method: "GET",
            headers: {
              Authorization: `bearer ${accessToken}`,
              "Content-type": "application/json;charset=UTF-8",
            },
          }
        );
        const json = await response.json();
        setBookings(json);
        if (json.length === 0) {
          <div
            id="main-container"
            className="d-flex gap-4 flex-wrap justify-content-center"
          >
            You dont have any bookings yet
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
      <ErrorOccured message="An error occured while loading your bookings" />
    );
  }
  return bookings.length === 0 ? (
    <div
      id="main-container"
      className="d-flex gap-4 flex-wrap justify-content-center"
    >
      No bookings found
    </div>
  ) : (
    <div
      id="main-container"
      className="d-flex gap-4 flex-wrap justify-content-center"
    >
      {bookings.map((booking) => {
        return (
          <BookingCard
            key={booking.id}
            venueUrl={booking.venue.media}
            venueName={booking.venue.name}
            rating={booking.venue.rating}
            dateFrom={booking.dateFrom}
            dateTo={booking.dateTo}
            guests={booking.guests}
            venueId={booking.venue.id}
            id={booking.id}
          />
        );
      })}
    </div>
  );
}
