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
let isPause = false;

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
    hour.innerText = HH.toString().padStart(2, "0");
    minute.innerText = MM.toString().padStart(2, "0");
    second.innerText = SS.toString().padStart(2, "0");
  }, 1000);
}

function resetbtn() {
  HH = 0;
  MM = 0;
  SS = 0;
  isPause = false;
  hour.innerText = HH.toString().padStart(2, "0");
  minute.innerText = HH.toString().padStart(2, "0");
  second.innerText = HH.toString().padStart(2, "0");
  pause.innerText = "pause";
  reset.style.visibility = "hidden";
  start.style.visibility = "visible";
  pause.style.visibility = "hidden";
  clearInterval(interval);
}

function pausebtn() {
  if (isPause) {
    isPause = false;
    pause.innerText = "pause";
    startbtn();
  } else {
    clearInterval(interval);
    isPause = true;
    pause.innerText = "resume";
  }
}
