const digitalClock = document.getElementById("display-digiclock");

const clockHandler = () => {
  let clock = new Date().toLocaleTimeString();

  digitalClock.innerHTML = clock;
};

setInterval(clockHandler, 1000);
