let stopwatchTimer, timerCountdown;
let isStopwatchRunning = false;
let stopwatchSeconds = 0, stopwatchMinutes = 0, stopwatchHours = 0;
let lapCount = 1;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

const timerHoursInput = document.getElementById("timerHours");
const timerMinutesInput = document.getElementById("timerMinutes");
const timerSecondsInput = document.getElementById("timerSeconds");
const timerDisplay = document.getElementById("timerDisplay");
const startTimerBtn = document.getElementById("startTimer");
const resetTimerBtn = document.getElementById("resetTimer");

const toggleTheme = document.getElementById("toggleTheme");

function formatTime(h, m, s) {
  return (
    (h < 10 ? "0" + h : h) + ":" +
    (m < 10 ? "0" + m : m) + ":" +
    (s < 10 ? "0" + s : s)
  );
}

function updateStopwatch() {
  stopwatchSeconds++;
  if (stopwatchSeconds == 60) {
    stopwatchSeconds = 0;
    stopwatchMinutes++;
  }
  if (stopwatchMinutes == 60) {
    stopwatchMinutes = 0;
    stopwatchHours++;
  }
  display.textContent = formatTime(stopwatchHours, stopwatchMinutes, stopwatchSeconds);
}

function startStopStopwatch() {
  if (isStopwatchRunning) {
    clearInterval(stopwatchTimer);
    startStopBtn.textContent = "▶️ Start";
  } else {
    stopwatchTimer = setInterval(updateStopwatch, 1000);
    startStopBtn.textContent = "⏸️ Pause";
  }
  isStopwatchRunning = !isStopwatchRunning;
}

function resetStopwatch() {
  clearInterval(stopwatchTimer);
  isStopwatchRunning = false;
  stopwatchHours = stopwatchMinutes = stopwatchSeconds = 0;
  lapCount = 1;
  display.textContent = "00:00:00";
  startStopBtn.textContent = "▶️ Start";
  lapsList.innerHTML = "";
}

function addLap() {
  if (!isStopwatchRunning) return;
  const lapItem = document.createElement("li");
  lapItem.textContent = `📍 Lap ${lapCount}: ${formatTime(stopwatchHours, stopwatchMinutes, stopwatchSeconds)}`;
  lapsList.appendChild(lapItem);
  lapCount++;
}

function startTimer() {
  let h = parseInt(timerHoursInput.value) || 0;
  let m = parseInt(timerMinutesInput.value) || 0;
  let s = parseInt(timerSecondsInput.value) || 0;
  let totalSeconds = h * 3600 + m * 60 + s;

  if (totalSeconds <= 0) return;

  timerDisplay.textContent = formatTime(h, m, s);
  startTimerBtn.disabled = true;

  timerCountdown = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerCountdown);
      timerDisplay.textContent = "⏳ Done!";
      startTimerBtn.disabled = false;
      return;
    }

    totalSeconds--;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    timerDisplay.textContent = formatTime(hours, minutes, seconds);
  }, 1000);
}

function resetTimer() {
  clearInterval(timerCountdown);
  timerDisplay.textContent = "00:00:00";
  timerHoursInput.value = "";
  timerMinutesInput.value = "";
  timerSecondsInput.value = "";
  startTimerBtn.disabled = false;
}

function toggleThemeMode() {
  document.body.classList.toggle("dark");
}

startStopBtn.addEventListener("click", startStopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", addLap);

startTimerBtn.addEventListener("click", startTimer);
resetTimerBtn.addEventListener("click", resetTimer);

toggleTheme.addEventListener("change", toggleThemeMode);
