import { BASE_URL } from "../../constants";

export async function deleteVenue(event) {
  const venueId = event.target.id;
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = user.accessToken;

  try {
    const response = await fetch(BASE_URL + "venues/" + venueId, {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    window.location.reload(true);
  } catch (error) {
    alert(
      "Something went wrong!! Try again shortly or contact us for assitance"
    );
  }
}
