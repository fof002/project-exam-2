import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { SetNumberOfStars } from "../venueCard/SetNumberOfStars";
import { BookVenue } from "./BookVenue";

export function SingleVenueCard(props) {
  return (
    <Card style={{ width: "min(95vw,50em)" }} className="border-0 rounded-0">
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
      <ListGroup className="list-group-flush fw-lighter fst-italic">
        <ListGroup.Item>
          <SetNumberOfStars numberOfStars={props.rating} />
        </ListGroup.Item>
        <ListGroup.Item>Price: {props.venuePrice}$ per night</ListGroup.Item>
        <ListGroup.Item>Max guests: {props.maxGuests}</ListGroup.Item>
        <ListGroup.Item>Services: {props.services}</ListGroup.Item>
        <ListGroup.Item>
          {props.address}, {props.city}, {props.country}
        </ListGroup.Item>
        {localStorage.getItem("user") ? (
          <ListGroup.Item>
            <BookVenue />
          </ListGroup.Item>
        ) : (
          ""
        )}
      </ListGroup>
    </Card>
  );
}
