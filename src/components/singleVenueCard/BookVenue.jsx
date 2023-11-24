import { CalendarComponent } from "./CalendarComponent";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { bookVenueFunction } from "./bookVenueFunction";

export function BookVenue(props) {
  return (
    <div className="d-flex flex-column">
      <Card.Text className="fw-bold">Book venue</Card.Text>
      <div className="d-flex gap-3">
        <div className="d-flex flex-column">
          <Form.Label>Select dates</Form.Label>
          <CalendarComponent setReservedDates={props.setReservedDates} />
        </div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Number of guests</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number of guests"
              id="guests"
              name="guests"
            />
          </Form.Group>
        </Form>
      </div>
      <Card.Link
        onClick={bookVenueFunction}
        className="text-decoration-none"
        href="#"
      >
        Book now
      </Card.Link>
    </div>
  );
}
