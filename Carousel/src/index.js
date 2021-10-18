import "./styles.css";

const imgContainer = document.querySelector(".img_box");
const img = document.querySelectorAll(".img_box li");
const left = document.querySelector(".left_btn");
const right = document.querySelector(".right_btn");
const dots = document.querySelectorAll(".sel_box li");

let index = 0;
let event = null;

left.addEventListener("click", () => {
  clearInterval(event);
  event = null;
  if (--index < 0) index = img.length - 1;

  imgContainer.style.transform = `translateX(-${index * 300}px)`;
});

right.addEventListener("click", () => {
  clearInterval(event);
  event = null;
  if (++index === img.length) index = 0;

  imgContainer.style.transform = `translateX(-${index * 300}px)`;
});

dots.forEach((e, idx) =>
  e.addEventListener("click", () => {
    clearInterval(event);
    event = null;
    imgContainer.style.transform = `translateX(-${idx * 300}px)`;
  })
);

setInterval(() => {
  if (event == null) {
    event = setInterval(() => {
      if (++index === img.length) index = 0;

      imgContainer.style.transform = `translateX(-${index * 300}px)`;
    }, 1000);
  }
}, 1000);
