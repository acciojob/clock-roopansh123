//your JS code here. If required.
const timer = document.getElementById("timer");

function updateTimer() {
    timer.textContent = new Date().toString();
}

updateTimer(); // display immediately
setInterval(updateTimer, 1000); // update every second
