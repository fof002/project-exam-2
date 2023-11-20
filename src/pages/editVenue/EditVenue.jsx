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
    async function getData() {
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

  if (venue) {
    return <EditVenueForm />;
  }
}
