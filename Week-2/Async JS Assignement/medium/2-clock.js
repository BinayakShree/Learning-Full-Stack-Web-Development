let hour = 11;
let minute = 59;
let second = 55;

const updateTime = () => {
    second += 1;
    if (second >= 60) {
        minute += 1;
        second = 0;
    }
    if (minute >= 60) {
        hour += 1;
        minute = 0;
    }
    if (hour >= 24) {
        hour = 0;
    }
};

const logTime = () => {
    let time = hour < 12 || hour === 24 ? "AM" : "PM";
    let displayHour = hour % 12 === 0 ? 12 : hour % 12;

    let formattedHour = displayHour.toString().padStart(2, '0');
    let formattedMinute = minute.toString().padStart(2, '0');
    let formattedSecond = second.toString().padStart(2, '0');

    console.log(`${formattedHour}:${formattedMinute}:${formattedSecond} ${time}`);
};

// Update the time every second
setInterval(() => {
    updateTime();
}, 1000);

// Log the time every second
setInterval(() => {
    logTime();
}, 1000);
