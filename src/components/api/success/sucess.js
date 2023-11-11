const successContainer = document.querySelector("#successContainer");
const errorContainer = document.querySelector("#errorContainer");

export function displaySuccess(message) {
  errorContainer.style.display = "none";
  successContainer.style.display = "block";
  successContainer.innerHTML = message;
}
