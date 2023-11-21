import { Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import { BASE_URL } from "../../../constants";
import { Link } from "react-router-dom";

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
  const filteredProducts = venues.filter((venue) => {
    document.querySelector("#searchInput").value.length === 0
      ? (document.querySelector("#searchUrl").style.display = "none")
      : (document.querySelector("#searchUrl").style.display = "block");
    return venue.name.toLowerCase().includes(query.toLowerCase());
  });
  function showList() {
    const listOfProducts = document.querySelector("#searchUrl");
    listOfProducts.style.display = "block";
  }
  return (
    <Form>
      <div className="bg-white p-1" id="searchContainer">
        <Row className="d-flex">
          <Col xs="auto" className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: "1.3rem" }}
              className="ps-2"
            />

            <Form.Control
              onChange={(e) => setQuery(e.target.value)}
              onFocus={showList}
              ref={inputRef}
              type="text"
              id="searchInput"
              placeholder="Search our venues..."
              className=" mr-sm-2 bg-white text-black-50 border-0"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </div>
      <ul id="searchUrl">
        {filteredProducts.map((venue) => {
          return (
            <li>
              <Link
                to={{
                  pathname: `/${venue.id}`,
                }}
              >
                {venue.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Form>
  );
}
