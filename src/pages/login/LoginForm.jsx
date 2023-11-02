import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { login } from "./login";

export function LoginForm() {
  return (
    <Form style={{ width: "min(40em,100%)" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={login} variant="primary" type="submit">
        Login
      </Button>
      <Link to="/create-user">
        <Button className="ms-2" variant="primary" type="submit">
          Create User
        </Button>
      </Link>
    </Form>
  );
}
