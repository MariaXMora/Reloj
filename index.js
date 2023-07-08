const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function uptadateClock(){
    const currentDate = new Date();
    setTimeout(uptadateClock, 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`
    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`
}

uptadateClock();

//this is going to work the same, instead of setTimeout:
// setInterval(updateClock, 1000) ... we call de function after.
