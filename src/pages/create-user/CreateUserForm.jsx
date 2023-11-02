import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function CreateUserForm() {
  return (
    <div style={{ width: "min(40em,100%)" }}>
      <h1>Create new user</h1>
      <Form>
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
          <Form.Text className="text-muted">
            Must be a valid image URL
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check type="checkbox" label="Register as a venue manager" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
}
