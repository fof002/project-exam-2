import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Calendar from "@demark-pro/react-booking-calendar";

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
        <Card.Title>{props.venueName}</Card.Title>
        <Card.Text>{props.venueDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush fw-lighter fst-italic">
        <ListGroup.Item>Price: {props.venuePrice}$ per night</ListGroup.Item>
        <ListGroup.Item>Max guests: {props.maxGuests}</ListGroup.Item>
        <ListGroup.Item>Services: {props.services}</ListGroup.Item>
        <ListGroup.Item>
          {props.address}, {props.city}, {props.country}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex align-items-end">
        <Calendar />
      </Card.Body>
    </Card>
  );
}
