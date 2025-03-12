const button = document.querySelector(".share-btn");
const div = document.getElementById("click");

function OffOrOn() {
  div.classList.toggle("hidden");
}

button.addEventListener("click", OffOrOn());
