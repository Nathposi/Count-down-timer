const $ = (id) => {
    return document.getElementById(id);
    //jQuery-like function that selects the elements its id and returns to avoid repitition
}

const $days = $('day-time');
const $hours = $('hours-time');
const $minutes = $('minutes-time');
const $seconds = $('seconds-time');
const targetDate = new Date('2024-03-10T00:00:00');
//const targetDate = new Date()
//targetDate.setDate(targetDate.getDate() + 10);
//targetDate.setHours(23, 59, 0);
document.querySelector(".presentDate").textContent = targetDate.toDateString();
const updateTimer = () => {
    let totalInSec = Math.floor(
        (targetDate.valueOf() - new Date().valueOf()) / 1000
    );

    if (totalInSec < 0) {
        totalInSec = 0;
        //doesnt let the value to be negative
    }

    const seconds = Math.floor(
        totalInSec % 60
    );
    const minutes = Math.floor(
        (totalInSec / 60) % 60
    );
    const hours = Math.floor(
        (totalInSec / 60 / 60) % 24
    );
    const days = Math.floor(
        totalInSec / 60 / 60 / 24
    );
    const format = (num) => {
        return `${num}`.padStart(2, '0'); //used to ensure that theres a consistent two digit display for each unit of time
    };

    $seconds.innerText = format(seconds);
    $minutes.innerText = format(minutes);
    $hours.innerText = format(hours);
    $days.innerText = format(days);
    //updates the text content of the variables with the format function to give the formatted values
};

setInterval(updateTimer, 1000);//updates the timer every 1000ms or 1s so that it displays the remaining time in real-time
document.getElementById("ja").textContent = toDateString;