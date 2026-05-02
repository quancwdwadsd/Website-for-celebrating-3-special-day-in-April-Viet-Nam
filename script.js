const gioToDate = new Date("April 26, 2026 00:00:00").getTime();
const laoDongDate = new Date("May 1, 2026 00:00:00").getTime();
const giaiPhongDate = new Date("April 30, 2026 00:00:00").getTime();

const gioToCountdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = gioToDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("gioToDay").innerHTML = days;
    document.getElementById("gioToHour").innerHTML = hours;
    document.getElementById("gioToMinute").innerHTML = minutes;
    document.getElementById("gioToSecond").innerHTML = seconds;

    if (distance < 0) {
        document.getElementById("gioToDay").innerHTML = "0";
        document.getElementById("gioToHour").innerHTML = "0";
        document.getElementById("gioToMinute").innerHTML = "0";
        document.getElementById("gioToSecond").innerHTML = "0";
    }
});

const laoDongCountdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = laoDongDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("laoDongDay").innerHTML = days;
    document.getElementById("laoDongHour").innerHTML = hours;
    document.getElementById("laoDongMinute").innerHTML = minutes;
    document.getElementById("laoDongSecond").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(laoDongCountdown);
        document.getElementById("laoDongDay").innerHTML = "0";
        document.getElementById("laoDongHour").innerHTML = "0";
        document.getElementById("laoDongMinute").innerHTML = "0";
        document.getElementById("laoDongSecond").innerHTML = "0";
    }
});

const giaiPhongCountdown = setInterval(function () {    
    const now = new Date().getTime();
    const distance = giaiPhongDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("giaiPhongDay").innerHTML = days;
    document.getElementById("giaiPhongHour").innerHTML = hours;
    document.getElementById("giaiPhongMinute").innerHTML = minutes;
    document.getElementById("giaiPhongSecond").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(giaiPhongCountdown);
        document.getElementById("giaiPhongDay").innerHTML = "0";
        document.getElementById("giaiPhongHour").innerHTML = "0";
        document.getElementById("giaiPhongMinute").innerHTML = "0";
        document.getElementById("giaiPhongSecond").innerHTML = "0";
    }
});