const errorContainer = document.querySelector("#errorContainer");

export function displayErrors(errors) {
  errorContainer.style.display = "block";
  errorContainer.innerHTML = "";
  errors.forEach((error) => {
    errorContainer.innerHTML += `<li>${error.message}</li>`;
  });
}
