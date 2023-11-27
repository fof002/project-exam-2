import { Card, ListGroup, Modal, Button } from "react-bootstrap";
import { SetNumberOfStars } from "../venueCard/SetNumberOfStars";
import { useState } from "react";
import { BASE_URL } from "../../constants";
import { LinkContainer } from "react-router-bootstrap";
import { addDefaultSrc } from "../api/errors/ImageError";
import image from "./image.png";

export function BookingCard(props) {
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
      await fetch(BASE_URL + "bookings/" + itemId, {
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
      </Card.Body>
      <ListGroup className="list-group-flush  fst-italic">
        <ListGroup.Item>
          <SetNumberOfStars numberOfStars={props.rating} />
        </ListGroup.Item>
        <ListGroup.Item>
          From: {new Date(props.dateFrom).toLocaleDateString()}
        </ListGroup.Item>
        <ListGroup.Item>
          To: {new Date(props.dateTo).toLocaleDateString()}
        </ListGroup.Item>
        <ListGroup.Item>Guests: {props.guests}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex align-items-end">
        <LinkContainer
          className="text-decoration-none"
          to={{
            pathname: `/venue/${props.venueId}`,
          }}
        >
          <Card.Link href="#">View</Card.Link>
        </LinkContainer>
        <Card.Link
          onClick={handleShow}
          className="text-decoration-none"
          id={props.id}
          href="#"
        >
          Cancel booking
        </Card.Link>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cancellation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to cancel this booking? The venue will
              notify you when cancellation is confirmed.
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={deleteVenue} className="rounded-0">
                Yes, cancel
              </Button>
              <Button className="rounded-0" onClick={handleClose}>
                No, Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Card.Body>
    </Card>
  );
}
