import "./styles.css";

const icon = document.querySelector(".menu-icon");
const list = document.querySelector("ul");

let event;

function run() {
  clearTimeout(event);
  icon.classList.toggle("toogle-icon");
  list.classList.toggle("toogle-ul");

  event = setTimeout(() => {
    if (icon.classList.contains("toogle-icon")) run();
  }, 1000);
}

icon.addEventListener("click", run);
