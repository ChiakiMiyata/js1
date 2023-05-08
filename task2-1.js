const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let elapsedTime = 0;
let timeoutId;

function countUp() {
  const d = new Date(Date.now() - startTime + elapsedTime);
  const h = Math.floor(d / 3600000);
  const m = Math.floor(d / 60000);
  const s = Math.floor(d % 60000 / 1000);
  const ms = Math.floor(d % 1000);

  time.textContent = `${h}:${m}:${s}:${ms}`;

  timeoutId = setTimeout(() => {
    countUp();
  }, 10);
}

stopButton.disabled = true;
resetButton.disabled = true;

startButton.addEventListener('click', function() {
    startTime = Date.now();
    countUp();
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
  },false);

  stopButton.addEventListener('click', function() {
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
  },false);

  resetButton.addEventListener('click', function() {
    time.textContent = '0:0:0:0';
    elapsedTime = 0;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
  },false);