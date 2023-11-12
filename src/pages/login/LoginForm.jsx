import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { BASE_URL } from "../../constants";

export function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const request = {
    email: email,
    password: password,
  };

  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(BASE_URL + "auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(request),
      });
      const json = await response.json();
      if (json.errors) {
        console.log("something went wrong");
      } else {
        console.log(json);
        localStorage.setItem("user", JSON.stringify(json));
        window.location.assign("/");
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
    if (event.target.name === "email") {
      setEmail(value);
    }

    if (event.target.name === "password") {
      setPassword(value);
    }
  }

  return (
    <div style={{ width: "min(40em,100%)" }}>
      <h1>Login</h1>
      <Form style={{ width: "min(40em,100%)" }} onSubmit={onFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            onChange={onTextInputChange}
            required
          />

          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            onChange={onTextInputChange}
            required
          />
        </Form.Group>
        <Button className="rounded-0" variant="primary" type="submit">
          Login
        </Button>
        <Link to="/create-user">
          <Button className="ms-2 rounded-0" variant="primary">
            Create User
          </Button>
        </Link>
      </Form>
    </div>
  );
}
