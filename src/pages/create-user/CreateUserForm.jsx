import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUser } from "./createUser";

export function CreateUserForm() {
  return (
    <Form style={{ width: "min(40em,100%)" }}>
      <Form.Group className="mb-3" controlId="Username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
        <Form.Text className="text-muted">
          Must be a valid @noroff.no or @stud.noroff.no email
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
        <Form.Text className="text-muted">
          Must be at least 8 characters long
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Avatar">
        <Form.Label>Profile image</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">Must be a valid image URL</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Check if you want to register as a venue manager"
        />
      </Form.Group>
      <Button onClick={createUser} variant="primary" type="submit">
        Create User
      </Button>
    </Form>
  );
}