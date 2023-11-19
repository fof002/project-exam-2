import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FormGroup } from "react-bootstrap";
import { useState } from "react";
import { BASE_URL } from "../../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupSchema";
import { displayErrors } from "../../api/errors/errors";

export function AddVenue(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [price, setPrice] = useState(0);
  const [maxGuests, setMaxGuests] = useState(0);
  const [rating, setRating] = useState(0);
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const request = {
    name: name,
    description: description,
    media: [media],
    price: parseFloat(price),
    maxGuests: parseFloat(maxGuests),
    rating: parseFloat(rating),
    meta: {
      wifi: wifi,
      parking: parking,
      breakfast: breakfast,
      pets: pets,
    },
    location: {
      address: address,
      city: city,
      zip: zip,
      country: country,
      continent: continent,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    },
  };

  async function onFormSubmit() {
    console.log("funket");
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user.accessToken;

    try {
      const response = await fetch(BASE_URL + "venues", {
        method: "POST",
        headers: {
          Authorization: `bearer ${accessToken}`,
          "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(request),
      });
      const json = await response.json();
      console.log(json);
      if (json.errors) {
        displayErrors(json.errors);
      } else {
        window.location.assign(`/your-venues`);
      }
    } catch (error) {
      alert(
        "Something went wrong!! Try again shortly or contact us for assitance"
      );
    }
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "name") {
      setName(value);
    }
    if (event.target.name === "description") {
      setDescription(value);
    }
    if (event.target.name === "media") {
      setMedia(value);
    }
    if (event.target.name === "price") {
      setPrice(value);
    }
    if (event.target.name === "maxGuests") {
      setMaxGuests(value);
    }
    if (event.target.name === "rating") {
      setRating(value);
    }
    if (event.target.name === "wifi") {
      setWifi(document.querySelector("#wifi").checked);
    }
    if (event.target.name === "parking") {
      setParking(document.querySelector("#parking").checked);
    }
    if (event.target.name === "breakfast") {
      setBreakfast(document.querySelector("#breakfast").checked);
    }
    if (event.target.name === "pets") {
      setPets(document.querySelector("#pets").checked);
      console.log("hei");
    }
    if (event.target.name === "address") {
      setAddress(value);
    }
    if (event.target.name === "city") {
      setCity(value);
    }
    if (event.target.name === "zip") {
      setZip(value);
    }
    if (event.target.name === "country") {
      setCountry(value);
    }
    if (event.target.name === "continent") {
      setContinent(value);
    }
    if (event.target.name === "lat") {
      setLat(value);
    }
    if (event.target.name === "lng") {
      setLng(value);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new venue
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit(onFormSubmit)}
          style={{ width: "min(40em,100%)" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              {...register("name")}
              placeholder="Descriptive name"
              type="text"
              id="name"
              name="name"
              onChange={onTextInputChange}
            />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              id="media"
              placeholder="Must be a valid image URL"
              name="media"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              {...register("description")}
              placeholder="Describe your venue"
              as="textarea"
              rows={3}
              id="description"
              name="description"
              onChange={onTextInputChange}
            />
            <p style={{ color: "red" }}>{errors.description?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price of venue</Form.Label>
            <Form.Control
              {...register("price")}
              placeholder="Set the price per night"
              type="number"
              id="price"
              name="price"
              onChange={onTextInputChange}
            />
            <p style={{ color: "red" }}>{errors.price?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Maximum number of guests</Form.Label>
            <Form.Control
              {...register("maxGuests")}
              placeholder="Maximum 100"
              type="number"
              id="maxGuests"
              name="maxGuests"
              onChange={onTextInputChange}
            />
            <p style={{ color: "red" }}>{errors.maxGuests?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Star rating</Form.Label>
            <Form.Control
              {...register("rating")}
              placeholder="Out of 5"
              type="number"
              id="rating"
              name="rating"
              onChange={onTextInputChange}
            />
            <p style={{ color: "red" }}>{errors.rating?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              id="address"
              name="address"
              onChange={onTextInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              id="city"
              name="city"
              onChange={onTextInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              id="zip"
              name="zip"
              onChange={onTextInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              id="country"
              name="country"
              onChange={onTextInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Continent</Form.Label>
            <Form.Control
              type="text"
              id="continent"
              name="continent"
              onChange={onTextInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="number"
              id="lat"
              name="lat"
              onChange={onTextInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Longditude</Form.Label>
            <Form.Control
              type="number"
              id="lng"
              name="long"
              onChange={onTextInputChange}
            />
          </Form.Group>
          <FormGroup style={{ fontWeight: "600" }}>
            Available services (check if available)
          </FormGroup>
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id="parking"
                label="parking"
                name="parking"
                onChange={onTextInputChange}
              />
              <Form.Check
                type={type}
                label="Wifi"
                id="wifi"
                name="wifi"
                onChange={onTextInputChange}
              />
              <Form.Check
                type={type}
                label="Breakfast"
                name="breakfast"
                id="breakfast"
                onChange={onTextInputChange}
              />
              <Form.Check
                type={type}
                label="pets"
                id="pets"
                name="pets"
                onChange={onTextInputChange}
              />
            </div>
          ))}
          <Button type="submit">Add Venue</Button>
        </Form>
      </Modal.Body>
      <ul id="errorContainer" style={{ display: "none", color: "red" }}></ul>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
