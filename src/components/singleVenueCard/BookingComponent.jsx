import { Button, Card, Form, ListGroup } from "react-bootstrap";
import { BASE_URL } from "../../constants";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-bootstrap/Modal";
import "react-datepicker/dist/react-datepicker.css";
import { excludeIntervals } from "./excludeIntervals";

export function BookingsComponent(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState([]);
  const handleClose = () => setShow(false);

  const onChangeGuests = (e) => {
    setGuests(parseFloat(e.target.value));
    console.log(request);
  };

  const request = {
    dateFrom: startDate,
    dateTo: endDate,
    guests: guests,
    venueId: props.venueId,
  };

  async function bookVenue(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user.accessToken;

    try {
      const response = await fetch(BASE_URL + "bookings", {
        method: "POST",
        headers: {
          Authorization: `bearer ${accessToken}`,
          "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(request),
      });
      const json = await response.json();
      if (json.errors) {
        const errorContainer = document.querySelector("#errorContainer");
        json.errors.forEach((error) => {
          errorContainer.innerHTML += `<li>${error.message}</li>`;
        });
      } else {
        setResponse(json);
        setShow(true);
        setEndDate(null);
        setGuests(1);
        document.querySelector("#guests").value = 1;
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ListGroup.Item>
      <div className="d-flex flex-column">
        <Card.Text className="fw-bold">Book venue</Card.Text>
        <Form onSubmit={bookVenue}>
          <div className="d-flex gap-2 flex-wrap">
            <Form.Group className="mb-3 d-flex flex-column">
              <Form.Label>Check-in</Form.Label>
              <DatePicker
                className="mb-3"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                startDate={startDate}
                selectsStart
                endDate={endDate}
                excludeDateIntervals={excludeIntervals(props.bookings)}
              />
              <Form.Label>Check-out</Form.Label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                excludeDateIntervals={excludeIntervals(props.bookings)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of guests</Form.Label>
              <Form.Control
                onChange={onChangeGuests}
                placeholder="Number of guests"
                id="guests"
                type="number"
                name="guests"
                min="1"
                max={props.maxGuests}
                required
              />
            </Form.Group>
          </div>
          <Button
            className="rounded-0"
            type="submit"
            style={{ width: "max-content" }}
          >
            Book now
          </Button>
        </Form>
        <ul id="errorContainer"></ul>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Venue booked!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {response ? (
            <ListGroup className="rounded-0">
              <ListGroup.Item>
                From: {new Date(response.dateFrom).toLocaleDateString()}
              </ListGroup.Item>
              <ListGroup.Item>
                To: {new Date(response.dateTo).toLocaleDateString()}
              </ListGroup.Item>
              <ListGroup.Item>Guests: {response.guests}</ListGroup.Item>{" "}
              <ListGroup.Item>
                You can view your bookings under "your bookings"
              </ListGroup.Item>
            </ListGroup>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="rounded-0" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </ListGroup.Item>
  );
}
