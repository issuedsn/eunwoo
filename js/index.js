const dDay = new Date("2023-10-22");
const dDay2 = new Date("2023-07-22");
const localDDay = new Date(
  dDay.getTime() + dDay.getTimezoneOffset() * 60 * 1000
);

let days = Math.floor((localDDay - new Date()) / (1000 * 60 * 60 * 24));
let hours = Math.floor((localDDay - new Date()) / (1000 * 60 * 60)) % 24;
let minutes = Math.floor((localDDay - new Date()) / (1000 * 60)) % 60;
let seconds = Math.floor((localDDay - new Date()) / 1000) % 60;

const intervalId = setInterval(() => {
  days = Math.floor((localDDay - new Date()) / (1000 * 60 * 60 * 24));
  hours = Math.floor((localDDay - new Date()) / (1000 * 60 * 60)) % 24;
  minutes = Math.floor((localDDay - new Date()) / (1000 * 60)) % 60;
  seconds = Math.floor((localDDay - new Date()) / 1000) % 60;

  document.getElementById("d-day").innerHTML = `
  D-day: ${days}일 ${hours < 10 ? "0" + hours : hours}시간 ${
    minutes < 10 ? "0" + minutes : minutes
  }분 ${seconds < 10 ? "0" + seconds : seconds}초
  `;
  document.getElementById("open-day").innerHTML = `${days}일 후 공개`;
  document.getElementById("open-day2").innerHTML = `${days}일 후 공개`;
}, 1000);

// clear the interval when the page is unloaded
window.addEventListener("unload", () => {
  clearInterval(intervalId);
});
