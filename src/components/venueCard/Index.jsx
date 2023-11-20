import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { SetNumberOfStars } from "./SetNumberOfStars";

export function VenueCard(props) {
  return (
    <Card
      style={{ width: "min(24rem,100%)" }}
      className="text-decoration-none rounded-0 card-item"
    >
      <Card.Img className="rounded-0" variant="top" src={props.venueUrl} />
      <Card.Body>
        <Card.Title>{props.venueName}</Card.Title>
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
          {props.address}, {props.city} , {props.country}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex align-items-end">
        {props.owner === false ? (
          <LinkContainer
            className="text-decoration-none"
            to={{
              pathname: `venue/${props.venueId}`,
            }}
          >
            <Card.Link href="#">View and book</Card.Link>
          </LinkContainer>
        ) : (
          <div>
            <LinkContainer
              className="text-decoration-none"
              to={{
                pathname: `/edit-venue/${props.venueId}`,
              }}
            >
              <Card.Link href="#" data-venue-id={props.venueId}>
                Edit
              </Card.Link>
            </LinkContainer>
            <Card.Link
              onClick={props.deleteVenue}
              className="text-decoration-none"
              id={props.venueId}
              href="#"
            >
              Delete
            </Card.Link>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
