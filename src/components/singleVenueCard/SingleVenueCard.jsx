import ListGroup from "react-bootstrap/ListGroup";
import { SetNumberOfStars } from "../venueCard/SetNumberOfStars";
import { Card } from "react-bootstrap";
import { BookingsComponent } from "./BookingComponent";

export function SingleVenueCard(props) {
  return (
    <Card
      style={{ width: "min(95vw,50em)" }}
      className="single-venue p-3 border-0 rounded-0"
    >
      <Card.Img
        className="rounded-0"
        variant="top"
        src={props.venueUrl}
        style={{ maxHeight: "30em", width: "100%" }}
      />
      <Card.Body>
        <h1>{props.venueName}</h1>
        <Card.Text>{props.venueDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush fst-italic">
        <ListGroup.Item>
          <SetNumberOfStars numberOfStars={props.rating} />
        </ListGroup.Item>
        <ListGroup.Item>Price: {props.venuePrice}$ per night</ListGroup.Item>
        <ListGroup.Item>Max guests: {props.maxGuests}</ListGroup.Item>
        <ListGroup.Item>Services: {props.services}</ListGroup.Item>
        {props.city ? <ListGroup.Item>City: {props.city}</ListGroup.Item> : ""}
        {props.continent ? (
          <ListGroup.Item>continent: {props.continent}</ListGroup.Item>
        ) : (
          ""
        )}
        {props.address ? (
          <ListGroup.Item>Adress: {props.address}</ListGroup.Item>
        ) : (
          ""
        )}
        {props.lat === 0 || props.lng === 0 ? (
          ""
        ) : (
          <ListGroup.Item>
            Lat/long: {props.lat}/{props.long}
          </ListGroup.Item>
        )}

        {localStorage.getItem("user") ? <BookingsComponent /> : ""}
      </ListGroup>
    </Card>
  );
}
