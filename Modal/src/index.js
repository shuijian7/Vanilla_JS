const open = document.getElementById("btn");

const close = document.querySelector(".popup-container button");

const panel = document.querySelector(".popup-container");

open.addEventListener("click", () => {
  panel.classList.add("active");
});

close.addEventListener("click", () => {
  panel.classList.remove("active");
});
