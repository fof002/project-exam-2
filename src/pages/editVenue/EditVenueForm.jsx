import Button from "react-bootstrap/Button";
import { Form, FormGroup } from "react-bootstrap";
import { useState } from "react";
import { BASE_URL } from "../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/header/Add venue/yupSchema";
import { displayErrors } from "../../components/api/errors/errors";
import { useParams } from "react-router-dom";

export function EditVenueForm(props) {
  const params = useParams();

  const [form, setForm] = useState({
    name: props.name,
    description: props.description,
    media: props.media,
    price: props.price,
    maxGuests: props.maxGuests,
    rating: props.rating,
    meta: {
      wifi: props.wifi,
      parking: props.parking,
      breakfast: props.breakfast,
      pets: props.pets,
    },
    location: {
      address: props.address,
      city: props.city,
      zip: props.zip,
      country: props.country,
      continent: props.continent,
      lat: props.lat,
      lng: props.lng,
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
      const response = await fetch(BASE_URL + "venues/" + params.id, {
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
      style={{ width: "min(50em,100%)" }}
      className="d-flex flex-wrap align-items-center gap-2"
    >
      <Form.Group style={{ width: "min(40em,100%)" }} className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          {...register("name")}
          placeholder="Descriptive name"
          type="text"
          id="name"
          name="name"
          defaultValue={props.name}
          onChange={onTextInputChange}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </Form.Group>
      <Form.Group className="mb-3" style={{ width: "min(40em,100%)" }}>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          id="media"
          placeholder="Must be a valid image URL"
          name="media"
          defaultValue={props.media}
          onChange={onTextInputChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" style={{ width: "min(40em,100%)" }}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          {...register("description")}
          placeholder="Describe your venue"
          as="textarea"
          rows={5}
          id="description"
          name="description"
          defaultValue={props.description}
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
          defaultValue={props.price}
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
          defaultValue={props.maxGuests}
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
          style={{ width: "min(20em,100%)" }}
          name="rating"
          defaultValue={props.rating}
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
          defaultValue={props.address}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          id="city"
          name="city"
          defaultValue={props.city}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip</Form.Label>
        <Form.Control
          type="text"
          id="zip"
          name="zip"
          defaultValue={props.zip}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          id="country"
          name="country"
          defaultValue={props.country}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Continent</Form.Label>
        <Form.Control
          type="text"
          id="continent"
          name="continent"
          defaultValue={props.continent}
          onChange={onLocationInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="number"
          id="lat"
          name="lat"
          defaultValue={props.lat}
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
          defaultValue={props.lng}
        />
      </Form.Group>
      {["checkbox"].map((type) => (
        <div
          style={{ width: "min(40em,100%)" }}
          key={`default-${type}`}
          className="d-flex gap-3 mb-3"
        >
          <Form.Check
            type={type}
            id="parking"
            label="parking"
            name="parking"
            defaultChecked={props.parking}
            onChange={onMetaInputChange}
          />
          <Form.Check
            type={type}
            label="Wifi"
            id="wifi"
            name="wifi"
            defaultChecked={props.wifi}
            onChange={onMetaInputChange}
          />
          <Form.Check
            type={type}
            label="Breakfast"
            name="breakfast"
            id="breakfast"
            defaultChecked={props.breakfast}
            onChange={onMetaInputChange}
          />
          <Form.Check
            type={type}
            label="pets"
            id="pets"
            name="pets"
            defaultChecked={props.pets}
            onChange={onMetaInputChange}
          />
        </div>
      ))}
      <FormGroup style={{ width: "min(40em,100%)" }}>
        <Button id={props.id} type="submit">
          Update venue
        </Button>
      </FormGroup>
    </Form>
  );
}
