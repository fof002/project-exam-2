import { Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
  return (
    <Form>
      <div className="bg-white p-1 rounded" id="searchContainer">
        <Row className="d-flex">
          <Col xs="auto" className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: "1.3rem" }}
              className="ps-2"
            />

            <Form.Control
              type="text"
              id="searchInput"
              placeholder="Search our venues..."
              className=" mr-sm-2 bg-white text-black-50 border-0"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </div>
    </Form>
  );
}
