import { Form, Row, Col, Button } from "react-bootstrap";

export function SearchBar() {
  return (
    <Form inline>
      <Row className="d-flex">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search our venues..."
            className=" mr-sm-2 bg-white text-primary"
          />
        </Col>
        <Col xs="auto">
          <Button className="border-white" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
