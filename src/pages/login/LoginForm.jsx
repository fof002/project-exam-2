import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { login } from "./login";

export function LoginForm() {
  return (
    <div style={{ width: "min(40em,100%)" }}>
      <h1>Login</h1>
      <Form style={{ width: "min(40em,100%)" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Button
          className="rounded-0"
          onClick={login}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
        <Link to="/create-user">
          <Button className="ms-2 rounded-0" variant="primary" type="submit">
            Create User
          </Button>
        </Link>
      </Form>
    </div>
  );
}
