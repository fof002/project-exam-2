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
            <Form.Control
              type="text"
              placeholder="Title"
              id="title"
              name="title"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Title"
              id="title"
              name="title"
              onChange={onTextInputChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onFormSubmit}>Change Avatar</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
