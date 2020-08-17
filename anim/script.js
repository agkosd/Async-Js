const spinner = document.querySelector("div");
const body = document.querySelector("body");

let count = 0;
let startTime = null;
let rAF;
let tracker = 0;

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }
  count = (timestamp - startTime) / 3;
  if (count > 359) {
    count %= 360;
  }
  spinner.style.transform = `rotate(${count}deg)`;
  rAF = requestAnimationFrame(draw);
}

body.addEventListener("click", () => {
  if (tracker === 0) {
    draw();
    tracker = 1;
  } else {
    cancelAnimationFrame(rAF);
    tracker = 0;
  }
});
