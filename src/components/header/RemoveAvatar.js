import { BASE_URL } from "../../constants";

import icon from "./icon.png";

const request = {
  avatar: null,
};

export async function removeAvatar(event) {
  event.preventDefault();
  const avatarInput = document.querySelector("#avatar");
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.name;

  const accessToken = user.accessToken;

  try {
    const response = await fetch(BASE_URL + "profiles/" + userName + "/media", {
      method: "PUT",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(request),
    });
    const json = await response.json();
    if (json.errors) {
      alert(json.errors);
    } else {
      const avatarImage = document.querySelector("#avatarImage");
      avatarInput.value = "";
      user.avatar = json.avatar;
      localStorage.setItem("user", JSON.stringify(user));
      avatarInput.placeholder = "Avatar removed!";
      avatarImage.src = icon;
    }
  } catch (error) {
    alert(
      "Something went wrong!! Try again shortly or contact us for assitance"
    );
  }
}
