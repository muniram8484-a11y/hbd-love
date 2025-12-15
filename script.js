const startDate = new Date("2024-06-01T00:00:00"); // change date if needed
const music = document.getElementById("music");

document.getElementById("startBtn").onclick = function () {
  document.getElementById("startScreen").style.display = "none";
  music.play();
  startTimer();
};

function startTimer() {
  setInterval(() => {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);

    const days = Math.floor(diff / (3600 * 24));
    diff %= 3600 * 24;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    document.getElementById("timer").innerHTML =
      `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }, 1000);
      }
