import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../../constants";

export const schema = yup.object({
  username: yup
    .string()
    .min(3, "Your username must be at least 3 characters.")
    .max(10, "Your username cannot be longer than 10 characters")
    .required("Please enter a username"),
  password: yup
    .string()
    .min(8, "Your password cannot be longer than 8 characters")
    .required("Please enter a password"),
});

export function CreateUserForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [venueManager, setVenueManager] = useState(true);

  async function onFormSubmit() {
    const body = {
      name: username,
      email: email,
      password: password,
      avatar: imageUrl,
      venueManager: venueManager,
    };

    const response = await fetch(BASE_URL + "auth/register", {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(body),
    });
    const userCreated = await response.json();
    console.log(userCreated);
    console.log(body);
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
    /*if (event.target.name === "venueManager") {
      setVenueManager(value);
    }*/
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
            type="text"
            onChange={onTextInputChange}
          />
          <p>{errors.username?.message}</p>
          <Form.Text className="text-muted">
            Username must not contain punctuation symbols apart from underscore
            _.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={onTextInputChange}
          />
          <Form.Text className="text-muted">
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
          <p>{errors.password?.message}</p>
          <Form.Text className="text-muted">
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
          <Form.Text className="text-muted">
            Must be a valid image URL
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check
            name="venueManager"
            type="checkbox"
            label="Register as a venue manager"
            onChange={onTextInputChange}
            value={true}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
}
