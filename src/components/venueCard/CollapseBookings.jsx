import { ListGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export function CollapseBookings(props) {
  return (
    <Accordion className="border" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {props.bookings ? "View bookings" : "No bookings"}
        </Accordion.Header>
        <Accordion.Body
          style={{
            background: "#fff",
            boxShadow: "0px 8px 14px 7px rgba(0, 0, 0, 0.25)",
            width: "calc(100% - 2em)",
            zIndex: "999",
          }}
          className="position-absolute border"
        >
          <ListGroup>
            {props.bookings
              ? props.bookings.map((booking) => {
                  <ListGroup.Item key={booking.id}>{booking}</ListGroup.Item>;
                })
              : ""}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
