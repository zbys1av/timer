const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const date = document.getElementById("date");
const loading = document.getElementById("loading");
let sound = new Audio("mp3/alarm.mp3");
let fullSeconds = 0;
let alertWaiting = 0;
let hrs;
let min;
let sec;

document.querySelector('.startTimer').addEventListener('click', startButton);
document.querySelector('.pause').addEventListener('click', pause);
document.querySelector('.cleare').addEventListener('click', cleare);

function cleare(){
    document.querySelector('.hrs').value = "";
    document.querySelector('.min').value = "";
    document.querySelector('.sec').value = "";
    fullSeconds = 0;
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
}

function pause(){
    document.querySelector('.hrs').value = hours.innerHTML;
    document.querySelector('.min').value = minutes.innerHTML;
    document.querySelector('.sec').value = seconds.innerHTML;
    fullSeconds = 0;
    sound.pause();
    sound.currentTime = 0;
    document.querySelector(".pause").innerText = "pause";
    document.querySelector(".startTimer").style.visibility = "visible";
    document.querySelector(".cleare").style.visibility = "visible";
}

function changeDate(){
    hrs = document.querySelector('.hrs').valueAsNumber;
    min = document.querySelector('.min').valueAsNumber;
    sec = document.querySelector('.sec').valueAsNumber;
    const timeInSec = (hrs*60*60) + min*60 + sec;
    fullSeconds = timeInSec;
    return fullSeconds;
}

function updateCountdown() {
fullSeconds--;
if (fullSeconds < 0){
    return;
}
const hors = Math.floor(fullSeconds / 60 / 60);
const mnts = Math.floor((fullSeconds - (hors * 60 * 60)) / 60) % 60;
const scnds = Math.floor(fullSeconds - (hors * 60 * 60) - (mnts * 60));

hours.innerHTML = hors;
minutes.innerHTML = mnts;
seconds.innerHTML = scnds;

document.title = "TIMER | " + hors + " : " + mnts + " : " + scnds;

alert();
buttons();
}

function buttons(){
    if (hours.innerHTML === "0" && minutes.innerHTML === "0" && seconds.innerHTML === "0"){
        document.querySelector(".startTimer").style.visibility = "hidden";
        document.querySelector(".cleare").style.visibility = "hidden";
        document.querySelector(".pause").innerText = "OK";
    }
}

function alert(){
    if (hours.innerHTML === "0" && minutes.innerHTML === "0" && seconds.innerHTML === "0"){
        sound.play();
        sound.loop = true;
        sound.volume = 0.01;
    }
}

// run every second
function startButton(){
    if (document.querySelector('.hrs').value > "999"){
        document.querySelector('.hrs').value = 999;
    }
    if (document.querySelector('.hrs').value === ""){
        document.querySelector('.hrs').value = 0;
    }
    if (document.querySelector('.min').value === ""){
        document.querySelector('.min').value = 0;
    }
    if (document.querySelector('.sec').value === ""){
        document.querySelector('.sec').value = 0;
    }
    if (document.querySelector('.hrs').value === "" && document.querySelector('.min').value === "" && document.querySelector('.sec').value === ""){
        document.querySelector('.hrs').value = 0;
        document.querySelector('.min').value = 5;
        document.querySelector('.sec').value = 0;
    }
    changeDate();
}

setInterval(updateCountdown, 1000);