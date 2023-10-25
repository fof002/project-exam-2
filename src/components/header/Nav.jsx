import { ProfileDropdown } from "./ProfileDropdown";
import { Form, Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function NavVenue() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="img/Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <ProfileDropdown />
            <Nav.Link className="text-white" href="#link">
              About
            </Nav.Link>
          </Nav>
          <Form inline>
            <Row className="d-flex">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search our venues..."
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button className="border-white" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
