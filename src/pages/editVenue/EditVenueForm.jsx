import Button from "react-bootstrap/Button";
import { Form, FormGroup } from "react-bootstrap";
import { useState } from "react";
import { BASE_URL } from "../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/header/Add venue/yupSchema";
import { displayErrors } from "../../components/api/errors/errors";

export function EditVenueForm(props) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    media: [],
    price: 0,
    maxGuests: 0,
    rating: 0,
    meta: {
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    },
    location: {
      address: "",
      city: "",
      zip: "",
      country: "",
      continent: "",
      lat: 0,
      lng: 0,
    },
  });

  function onTextInputChange(e) {
    let value = "";
    e.target.type === "number"
      ? (value = parseInt(e.target.value))
      : (value = e.target.value);
    if (e.target.name === "media") {
      value = [e.target.value];
    }
    setForm({
      ...form,
      [e.target.name]: value,
    });
  }
  function onMetaInputChange(e) {
    let value = false;
    e.target.checked === true ? (value = true) : (value = false);
    setForm({
      ...form,
      meta: {
        ...form.meta,
        [e.target.name]: value,
      },
    });
  }

  function onLocationInputChange(e) {
    let value = "";
    e.target.type === "number"
      ? (value = parseInt(e.target.value))
      : (value = e.target.value);
    setForm({
      ...form,
      location: {
        ...form.location,
        [e.target.name]: value,
      },
    });
  }

  async function onFormSubmit() {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user.accessToken;

    try {
      const response = await fetch(BASE_URL + "venues", {
        method: "PUT",
        headers: {
          Authorization: `bearer ${accessToken}`,
          "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(form),
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Form
      onSubmit={handleSubmit(onFormSubmit)}
      style={{ width: "min(60em,100%)" }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          {...register("name")}
          placeholder="Descriptive name"
          type="text"
          id="name"
          name="name"
          value={props.name}
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
          value={props.media}
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
          value={props.description}
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
          value={props.price}
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
          value={props.maxGuests}
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
          value={props.rating}
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
          value={props.address}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          id="city"
          name="city"
          value={props.city}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip</Form.Label>
        <Form.Control
          type="text"
          id="zip"
          name="zip"
          value={props.zip}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          id="country"
          name="country"
          value={props.country}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Continent</Form.Label>
        <Form.Control
          type="text"
          id="continent"
          name="continent"
          value={props.continent}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="number"
          id="lat"
          name="lat"
          value={props.lat}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Longditude</Form.Label>
        <Form.Control
          type="number"
          id="lng"
          name="lng"
          onChange={onLocationInputChange}
          value={props.lng}
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
            checked={props.parking}
            onChange={onMetaInputChange}
          />
          <Form.Check
            type={type}
            label="Wifi"
            id="wifi"
            name="wifi"
            checked={props.wifi}
            onChange={onMetaInputChange}
          />
          <Form.Check
            type={type}
            label="Breakfast"
            name="breakfast"
            id="breakfast"
            checked={props.breakfast}
            onChange={onMetaInputChange}
          />
          <Form.Check
            type={type}
            label="pets"
            id="pets"
            name="pets"
            checked={props.pets}
            onChange={onMetaInputChange}
          />
        </div>
      ))}
      <Button type="submit">Add Venue</Button>
    </Form>
  );
}
