function countdown() {
    const timer = document.getElementById("timer")
    timer.textContent--;
    if (timer.textContent <= 0) {
        alert('You have won');
        clearInterval(clearTimer);
    }
}
const clearTimer = setInterval('countdown()', 1000);