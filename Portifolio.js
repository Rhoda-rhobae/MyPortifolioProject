const input = document.getElementById("email");
const open = document.getElementById("lets get sarted");

open.addEventListener("click", () => {
  window.open(email.value, "_blank");
});

const toggleButton = document.getElementById("toggle-button");
const naviList = document.getElementById("navi-list");
const buttonOne = document.getElementById("btn");

toggleButton.addEventListener("click", () => {
  naviList.classList.toggle("active");
});



