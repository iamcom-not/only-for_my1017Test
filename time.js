const timeCounter = document.querySelector(".timeCounter"),
  timeCounter2 = document.querySelector(".timeCounter2"),
  timeCounter3 = document.querySelector(".timeCounter3"),
  timeCounter4 = document.querySelector(".timeCounter4");

const testDay = new Date("2020-10-17 :13:00:00+0900");

function getTime() {
  const now = new Date();

  const diff = testDay - now;

  const s = Math.floor(diff / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const days = Math.floor(h / 24);
  const seconds = s % 60;
  const minutes = m % 60;
  const hours = h % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}`;
  // timeCounter.innerText=`${daysStr}일 ${hoursStr}시간 ${minutesStr}분 ${secondsStr}초`;
  timeCounter.innerText = `${daysStr}일`;
  timeCounter2.innerText = `${hoursStr}시간`;
  timeCounter3.innerText = `${minutesStr}분`;
  timeCounter4.innerText = `${secondsStr}초`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
