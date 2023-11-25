import { CalendarComponent } from "./CalendarComponent";
import { Button, Card, Form, ListGroup } from "react-bootstrap";

export function bookVenue() {
  alert("halloen ja");
}

export function BookingsComponent(props) {
  return (
    <ListGroup.Item>
      <div className="d-flex flex-column">
        <Card.Text className="fw-bold">Book venue</Card.Text>
        <div className="d-flex gap-3 flex-wrap">
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
        <Button onClick={bookVenue} style={{ width: "max-content" }}>
          Book now
        </Button>
      </div>
    </ListGroup.Item>
  );
}
