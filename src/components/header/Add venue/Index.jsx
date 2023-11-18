import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { BASE_URL } from "../../../constants";

export function AddVenue(props) {
  const [avatarUrl, setAvatarUrl] = useState("");

  const request = {
    avatar: avatarUrl,
  };

  async function onFormSubmit(event) {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user.accessToken;
    const userName = user.name;

    try {
      const response = await fetch(
        BASE_URL + "profiles/" + userName + "/media",
        {
          method: "PUT",
          headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(request),
        }
      );
      const json = await response.json();
      if (json.errors) {
        alert("this went to hell");
      } else {
        const avatarImage = document.querySelector("#avatarImage");
        const avatar = document.querySelector("#avatar");
        avatar.value = "";
        avatar.placeholder = "Avatar changed successfully!";
        avatarImage.src = json.avatar;
        user.avatar = json.avatar;
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      alert(
        "Something went wrong!! Try again shortly or contact us for assitance"
      );
    }
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    setAvatarUrl(value);
  }
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
        <Form style={{ width: "min(40em,100%)" }}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              id="media"
              name="media"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="description"
              name="description"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price of venue</Form.Label>
            <Form.Control
              type="number"
              id="price"
              name="price"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Maximum number of guests</Form.Label>
            <Form.Control
              placeholder="Maximum 100"
              type="number"
              id="maxGuests"
              name="maxGuests"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Star rating</Form.Label>
            <Form.Control
              placeholder="Out of 5"
              type="number"
              id="rating"
              name="rating"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Adress</Form.Label>
            <Form.Control
              type="text"
              id="adress"
              name="adress"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              id="city"
              name="city"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              id="zip"
              name="zip"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="country"
              name="country"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              id="continent"
              name="continent"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="number"
              id="lat"
              name="lat"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Longditude</Form.Label>
            <Form.Control
              type="number"
              id="long"
              name="long"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type}
                id="parking"
                label="parking"
              />

              <Form.Check type={type} label="Wifi" id="wifi" />
              <Form.Check type={type} label="Breakfast" id="breakfast" />
              <Form.Check type={type} label="pets" id="pets" />
            </div>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onFormSubmit}>Add venue</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
