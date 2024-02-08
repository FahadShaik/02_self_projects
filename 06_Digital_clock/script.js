const hourNum = document.getElementById("hr");
const minNum = document.getElementById("min");
const secNum = document.getElementById("sec");
const amPm = document.getElementById("am-pm");

const clockHandler = () => {
  let clock = new Date();
  let twelveHrFormat = clock.toLocaleTimeString();
  let hour = clock.getHours();
  let min = clock.getMinutes();
  let sec = clock.getSeconds();
  let am_pm = hour >= 12 ? "pm" : "am";

  hourNum.innerHTML = hour + " :";
  minNum.innerHTML = min + " :";
  secNum.innerHTML = sec;
  amPm.innerHTML = am_pm;
};

setInterval(clockHandler, 1000);
