import { Form, Row, Col, Container } from "react-bootstrap";

export function SearchBar() {
  return (
    <Form>
      <Container className="bg-white p-1 rounded" id="searchContainer">
        <Row className="d-flex">
          <Col xs="auto"></Col>
          <Col xs="auto">
            <Form.Control
              type="text"
              id="searchInput"
              placeholder="Search our venues..."
              className=" mr-sm-2 bg-white .text-black-50 border-0"
              style={{ minWidth: "20em" }}
            />
          </Col>
        </Row>
      </Container>
    </Form>
  );
}
