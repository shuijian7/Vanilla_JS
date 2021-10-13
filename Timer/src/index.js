import "./styles.css";

const timerList = document.querySelectorAll("p");
var id = null;

NodeList.prototype.map = function (cb) {
  var ans = [];
  for (var i of timerList) {
    ans.push(cb(i));
  }
  return ans;
};

document.querySelectorAll("button").forEach((e, idx) => {
  e.addEventListener("click", idx === 0 ? start : idx === 1 ? pause : reset);
});

function start() {
  if (id) return;
  var timer = timerList.map((each) => parseInt(each.innerHTML, 10));
  id = setInterval(() => {
    if (++timer[2] === 60) {
      timer[2] = 0;
      ++timer[1];
    }
    if (timer[1] === 60) {
      timer[1] = 0;
      ++timer[0];
    }

    timer.forEach((e, idx) => {
      var val = e.toString();
      timerList[idx].innerHTML =
        val.length === 1 ? "0" + e.toString() : e.toString();
    });
  }, 1);
}

function pause() {
  clearInterval(id);
  id = null;
}

function reset() {
  pause();
  timerList.forEach((time) => (time.innerHTML = "00"));
}
