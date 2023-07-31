let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let interval;
let HH = 0;
let MM = 0;
let SS = 0;

function startbtn() {
  start.style.visibility = "hidden";
  reset.style.visibility = "visible";
  pause.style.visibility = "visible";

  interval = setInterval(() => {
    SS++;
    if (SS > 59) {
      MM++;
      SS = 0;
    }
    if (MM > 59) {
      HH++;
      MM = 0;
    }
    hour.innerText = HH;
    minute.innerText = MM;
    second.innerText = SS;
  }, 1000);
  return interval;
}

function resetbtn() {
  hour.innerText = 0;
  minute.innerText = 0;
  second.innerText = 0;
  HH = 0;
  MM = 0;
  SS = 0;
  reset.style.visibility = "hidden";
  start.style.visibility = "visible";
  pause.style.visibility = "hidden";
  clearInterval(interval);
}

let isPause = false;
function pausebtn() {
  if (isPause) {
    isPause = false;
    startbtn();
  } else {
    clearInterval(interval);
    isPause = true;
  }
}
