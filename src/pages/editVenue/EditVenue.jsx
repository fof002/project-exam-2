import { EditVenueForm } from "./EditVenueForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { LoaderGrowing } from "../../components/GraphicEffects/LoaderGrowing";
import { ErrorOccured } from "../../components/GraphicEffects/Error";

export function EditVenueComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let params = useParams();
  const [venue, setVenue] = useState([]);

  useEffect(() => {
    async function getData(event) {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(BASE_URL + `venues/${params.id}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json;charset=UTF-8",
          },
        });
        const json = await response.json();
        setVenue(json);
        console.log(json);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [params.id]);
  if (isLoading) {
    return <LoaderGrowing />;
  }
  if (isError) {
    return (
      <ErrorOccured message="An error occured while loading your venues" />
    );
  }

  if (venue.location) {
    return (
      <EditVenueForm
        name={venue.name}
        media={venue.media}
        description={venue.description}
        price={venue.price}
        maxGuests={venue.maxGuests}
        rating={venue.rating}
        address={venue.location.address}
        city={venue.location.city}
        zip={venue.location.zip}
        country={venue.location.country}
        continent={venue.location.continent}
        lng={venue.location.lng}
        lat={venue.location.lat}
        parking={venue.meta.parking}
        wifi={venue.meta.wifi}
        breakfast={venue.meta.breakfast}
        pets={venue.meta.pets}
        id={venue.id}
      />
    );
  }
}
