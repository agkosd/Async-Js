let demo = document.querySelector("#demo");
let startbtn = document.querySelector("#start");
let stopbtn = document.querySelector("#stop");
let resetbtn = document.querySelector("#reset");
let count = 0;
let x = 0;

function stopWatch() {
  let hr = count / 3600;
  let min = (count % 3600) / 60;
  let sec = (count % 3600) % 60;
  count++;
  demo.textContent = "";
  demo.textContent += hr < 10 ? `0${Math.floor(hr)}:` : `${Math.floor(hr)}:`;
  demo.textContent += min < 10 ? `0${Math.floor(min)}:` : `${Math.floor(min)}:`;
  demo.textContent += sec < 10 ? `0${Math.floor(sec)}` : `${Math.floor(sec)}`;
}

startbtn.addEventListener("click", () => {
  x = setInterval(stopWatch, 1000);
});

stopbtn.addEventListener("click", () => {
  clearInterval(x);
});

resetbtn.addEventListener("click", () => {
  count = 0;
  demo.textContent = "00:00:00";
  clearInterval(x);
});
