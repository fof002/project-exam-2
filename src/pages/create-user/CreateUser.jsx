import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants";
import { schema } from "./yupSchema";
import { displayErrors } from "../../components/api/errors/errors";
import Modal from "react-bootstrap/Modal";
import { LinkContainer } from "react-router-bootstrap";

export function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [venueManager, setVenueManager] = useState(false);
  //For modal
  const [show, setShow] = useState(false);
  //Modal end
  const body = {
    name: username,
    email: email,
    password: password,
    avatar: imageUrl,
    venueManager: venueManager,
  };

  async function onFormSubmit() {
    try {
      const response = await fetch(BASE_URL + "auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      if (json.errors) {
        displayErrors(json.errors);
      } else {
        setShow(true);
        console.log(json);
      }
    } catch (error) {
      alert(
        "Something went wrong!! Try again shortly or contact us for assitance"
      );
      console.log(error);
    }
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "username") {
      setUsername(value);
    }
    if (event.target.name === "email") {
      setEmail(value);
    }
    if (event.target.name === "password") {
      setPassword(value);
    }
    if (event.target.name === "imageUrl") {
      setImageUrl(value);
    }
    if (event.target.name === "venueManager") {
      setVenueManager(document.querySelector("#checkboxVenue").checked);
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
    <div style={{ width: "min(40em,100%)" }}>
      <h1>Create new user</h1>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3" controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            {...register("username")}
            name="username"
            as="textarea"
            rows={3}
            onChange={onTextInputChange}
          />
          <p style={{ color: "red" }}>{errors.username?.message}</p>
          <Form.Text className="text-muted opacity-75">
            No special characters except underscore (_).
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            name="email"
            onChange={onTextInputChange}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>

          <Form.Text className="text-muted opacity-75">
            Must be a valid @noroff.no or @stud.noroff.no email
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password")}
            name="password"
            type="password"
            onChange={onTextInputChange}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
          <Form.Text className="text-muted opacity-75">
            The password must be at least 8 characters.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Avatar">
          <Form.Label>Profile image</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            onChange={onTextInputChange}
          />
          <Form.Text className="text-muted opacity-75">
            Must be a valid image URL (optional)
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check
            name="venueManager"
            type="checkbox"
            id="checkboxVenue"
            label="Register as a venue manager"
            onChange={onTextInputChange}
          />
        </Form.Group>
        <ul id="errorContainer" style={{ display: "none", color: "red" }}></ul>
        <Button className="rounded-0" variant="primary" type="submit">
          Create User
        </Button>
      </Form>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Well done!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          User created! You can now continue to our login page...
        </Modal.Body>
        <Modal.Footer>
          <LinkContainer to="/login">
            <Button variant="primary">Login</Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
