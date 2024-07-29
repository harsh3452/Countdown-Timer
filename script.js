const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const display = document.getElementById("display");
const themeToggle = document.getElementById("theme-toggle");

var interval = null;
var total = 0;

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    
    
    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkTheme", isDarkTheme);
    
  
    themeToggle.textContent = isDarkTheme ? "Light Theme" : "Dark Theme";
});


document.addEventListener("DOMContentLoaded", () => {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";
    document.body.classList.add(isDarkTheme ? "dark-theme" : "light-theme");
    themeToggle.textContent = isDarkTheme ? "Light Theme" : "Dark Theme";
});

function totalValue() {
    total =
        Number(hour.value) * 3600 +
        Number(minute.value) * 60 +
        Number(second.value);
}

function timer() {
    totalValue();
    total--;

    if (total >= 0) {
        var hr = Math.floor(total / 3600);
        var min = Math.floor((total / 60) - (hr * 60));
        let sec = total - ((hr * 3600) + (min * 60));

        hour.value = hr;
        minute.value = min;
        second.value = sec;
    } else {
        display.innerText = "Time Over!";
        clearInterval(interval);
    }
}

start.addEventListener("click", () => {
    clearInterval(interval);
    totalValue();
    interval = setInterval(timer, 1000);
    display.innerText = "Timer Started";
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    display.innerText = "Countdown Timer";
});
