import { CalendarComponent } from "../calendar/CalendarComponent";
import { changeBookingArray } from "../calendar/changeArray";

export function SingleVenueCard(props) {
  return (
    <div className="rounded-0 border-0 card mb-3" style={{ maxWidth: "90rem" }}>
      <div style={{ width: "50%" }} className="row g-0 d-flex flex-row">
        <div style={{ width: "100%" }} className="col-md-4">
          <img
            style={{ width: "100%" }}
            src={props.imageUrl}
            className="rounded-0 img-fluid"
            alt="..."
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Services: {props.services}
              </small>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Yes yes yes</small>
              {changeBookingArray(props.bookings)}
            </p>
            <CalendarComponent bookings={props.bookings} />
          </div>
        </div>
      </div>
    </div>
  );
}
