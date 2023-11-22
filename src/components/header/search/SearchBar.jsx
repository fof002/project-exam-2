import { Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import { BASE_URL } from "../../../constants";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import icon from "../icon.png";

export function SearchBar() {
  const [venues, setVenues] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    const getVenues = async () => {
      try {
        const response = await fetch(BASE_URL + "venues?sort=created");
        const json = await response.json();
        console.log(json);
        setVenues(json);
      } catch (error) {
        console.log(error);
      }
    };
    getVenues();
  }, []);
  const filteredVenues = venues.filter((venue) => {
    return venue.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <Form id="searchForm">
      <div className="bg-white p-1" id="searchContainer">
        <Row className="d-flex">
          <Col xs="auto" className="d-flex align-items-center">
            <div id="iconContainer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: "1.3rem" }}
                className="ps-2"
              />
            </div>
            <Form.Control
              onChange={(e) => setQuery(e.target.value)}
              ref={inputRef}
              type="text"
              id="searchInput"
              placeholder="Search our venues..."
              className=" mr-sm-2 bg-white text-black-50 border-0"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <ListGroup className="rounded-0 mt-3" id="searchUrl">
          {filteredVenues.map((venue) => {
            return (
              <Link
                className="list-item-search text-decoration-none"
                to={{
                  pathname: `/${venue.id}`,
                }}
              >
                <ListGroup.Item className="d-flex flex-wrap gap-3 align-items-center">
                  <img
                    height={60}
                    width={60}
                    alt="X"
                    onerror={icon}
                    src={venue.media}
                    thumbnail
                  />
                  <span style={{ fontSize: "1.2rem" }}>{venue.name} - </span>
                  <span>Max guests: {venue.maxGuests}</span>
                  <span>Country: {venue.location.country}</span>
                  <span>Continent: {venue.location.continent}</span>
                </ListGroup.Item>
              </Link>
            );
          })}
        </ListGroup>
      </div>
    </Form>
  );
}
