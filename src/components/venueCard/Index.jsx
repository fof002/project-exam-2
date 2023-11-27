import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { SetNumberOfStars } from "./SetNumberOfStars";
import { CollapseBookings } from "./CollapseBookings";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { BASE_URL } from "../../constants";
import { addDefaultSrc } from "../api/errors/ImageError";
import image from "./image.png";

export function VenueCard(props) {
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setItemId(e.target.id);
    setShow(true);
  };

  async function deleteVenue() {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user.accessToken;

    try {
      await fetch(BASE_URL + "venues/" + itemId, {
        method: "DELETE",
        headers: {
          Authorization: `bearer ${accessToken}`,
          "Content-type": "application/json;charset=UTF-8",
        },
      });
      window.location.reload(true);
    } catch (error) {
      alert(
        "Something went wrong!! Try again shortly or contact us for assitance"
      );
    }
  }

  return (
    <Card
      style={{ width: "min(24rem,100%)" }}
      className="venue text-decoration-none rounded-0 card-item"
    >
      <Card.Img
        className="rounded-0"
        variant="top"
        onError={addDefaultSrc}
        src={props.venueUrl ? props.venueUrl : image}
      />
      <Card.Body>
        <Card.Title>{props.venueName}</Card.Title>
        <Card.Text>{props.venueDescription}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush  fst-italic">
        <ListGroup.Item>
          <SetNumberOfStars numberOfStars={props.rating} />
        </ListGroup.Item>
        <ListGroup.Item>Price: {props.venuePrice}$ per night</ListGroup.Item>
        <ListGroup.Item>Max guests: {props.maxGuests}</ListGroup.Item>
        <ListGroup.Item>Services: {props.services}</ListGroup.Item>
        <ListGroup.Item>Country: {props.country}</ListGroup.Item>
        {props.owner === false ? (
          ""
        ) : (
          <Card.Body>
            <CollapseBookings bookings={props.bookings} />
          </Card.Body>
        )}
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
              onClick={handleShow}
              className="text-decoration-none"
              id={props.venueId}
              href="#"
            >
              Delete
            </Card.Link>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Delete venue</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete venue? This action cannot be
                undone.
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={deleteVenue} className="rounded-0">
                  Delete
                </Button>
                <Button className="rounded-0" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
