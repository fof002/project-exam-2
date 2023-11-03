import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";

export function VenueCard() {
  return (
    <Card className="rounded-0 card-item" style={{ width: "min(24rem,100%)" }}>
      <Card.Img
        className="rounded-0"
        variant="top"
        src="https://venueprofil.no/assets/images/gausel_galleri.webp"
      />
      <Card.Body>
        <Card.Title>Very nice venue</Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush fw-lighter fst-italic">
        <ListGroup.Item>Price: 2$ per night</ListGroup.Item>
        <ListGroup.Item>
          Services: breakfeast, parking, pets allowed, wifi
        </ListGroup.Item>
        <ListGroup.Item>Adress, city, country</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <LinkContainer className="text-decoration-none" to="/about">
          <Card.Link href="#">View and book</Card.Link>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
