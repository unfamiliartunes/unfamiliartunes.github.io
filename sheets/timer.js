const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const oldhead = document.getElementById("oldhead");
const newhead = document.getElementById("newhead");
const albumcover = document.getElementById("albumcover");
const releaseDate = new Date("2022-10-14T00:00:00");

function updateCountdown() {
  const currentTime = new Date();
  const diff = 0;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  if (diff <= 0) {
    countdown.style.display = "none";
    newhead.style.visibility = "visible";
    mystery.style.visibility = "hidden";
    albumcover.style.visibility = "visible";
  } else {
    countdown.style.visibility = "visible";
    mystery.style.visibility = "visible";
  }
}

setInterval(updateCountdown, 1000);
