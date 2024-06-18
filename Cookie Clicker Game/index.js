let countEl = document.getElementById("count-el");
let trialEl = document.getElementById("trial-el");
let timerEl = document.getElementById("timer-el");

let count = 0;
let timer;
let timeLeft = 30; // countdown timer starts at 30 seconds
let timerStarted = false;

function startTimer() {
    timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            save(); // Automatically save when time is up
        } else {
            timeLeft -= 1;
            timerEl.innerText = timeLeft + "s";
            
        }
    }, 1000);
}

function increment() {
    count += 1;
    countEl.innerText = count;

    if (!timerStarted) {
        timerStarted = true;
        startTimer();
    }
}

function save() {
    trialEl.innerText = trialEl.innerText + " - " + count;
    count = 0;
    countEl.innerText = count;
    timeLeft = 30; // reset timer to 30 secs
    clearInterval(timer); // stop the current timer
    timerStarted = false; // allow timer to start again on next click
    timerEl.innerText = timeLeft + "s"; // Update the timer display
}
