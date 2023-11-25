import { ListGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export function CollapseBookings(props) {
  return (
    <Accordion className="border" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {props.bookings.length > 0 ? "View bookings" : "No bookings yet"}
        </Accordion.Header>
        {props.bookings.length > 0 ? (
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
                    const from = new Date(
                      booking.dateFrom
                    ).toLocaleDateString();
                    const to = new Date(booking.dateTo).toLocaleDateString();
                    return (
                      <ListGroup.Item key={booking.id}>
                        <div>From: {from}</div>
                        <div>To: {to}</div>
                        <div>Guests: {booking.guests}</div>
                      </ListGroup.Item>
                    );
                  })
                : ""}
            </ListGroup>
          </Accordion.Body>
        ) : (
          ""
        )}
      </Accordion.Item>
    </Accordion>
  );
}
