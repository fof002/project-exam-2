import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";

export function VenueCard(props) {
  return (
    <Card className="rounded-0 card-item" style={{ width: "min(24rem,100%)" }}>
      <Card.Img className="rounded-0" variant="top" src={props.venueUrl} />
      <Card.Body>
        <Card.Title>{props.venueName}</Card.Title>
        <Card.Text>{props.venueDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush fw-lighter fst-italic">
        <ListGroup.Item>Price: {props.venuePrice}$ per night</ListGroup.Item>
        <ListGroup.Item>Services: {props.services}</ListGroup.Item>
        <ListGroup.Item>
          {props.address}, {props.city} , {props.country}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex align-items-end">
        <LinkContainer className="text-decoration-none" to="/about">
          <Card.Link href="#">View and book</Card.Link>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
