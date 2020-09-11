const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const date = document.getElementById("date");
const loading = document.getElementById("loading");
let sound = new Audio("mp3/alarm.mp3");
let startTime;
let timeNow;
let fullSeconds = 0;
let alertWaiting = 0;
let hrs;
let min;
let sec;
let saveTime = 0;
let pauseTimer = 1;

document.querySelector(".reset").style.display = "none";
document.querySelector(".resume").style.display = "none";

document.querySelector('.startTimer').addEventListener('click', startButton);
document.querySelector('.pause').addEventListener('click', pause);
document.querySelector('.cleare').addEventListener('click', cleare);
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.resume').addEventListener('click', resume);

function changeDate(){
    let myDate = new Date(document.querySelector('.newDate').valueAsNumber);
    const newYearTime = new Date(myDate);
    return newYearTime;
  }

function reset(){
    document.querySelector(".startTimer").style.display = "inline";
    document.querySelector(".resume").style.display = "none";
    document.querySelector(".reset").style.display = "none";
    document.querySelector(".pause").style.display = "none";
    document.querySelector(".cleare").style.display = "none";
    fullSeconds = saveTime;
    hours.innerHTML = "--";
    minutes.innerHTML = "--";
    seconds.innerHTML = "--";
    pauseTimer = 1;
}

function resume(){
    startTime = Math.floor(new Date().getTime() / 1000);
    fullSeconds = currentTime;
    document.querySelector(".resume").style.display = "none";
    // document.querySelector('.hrs').value = hours.innerHTML;
    // document.querySelector('.min').value = minutes.innerHTML;
    // document.querySelector('.sec').value = seconds.innerHTML;
    pauseTimer = 0;
}

function cleare(){
    document.querySelector(".resume").style.display = "none";
    document.querySelector(".pause").style.display = "none";
    document.querySelector(".reset").style.display = "none";
    document.querySelector(".cleare").style.display = "none";
    document.querySelector(".startTimer").style.display = "inline";
    document.querySelector(".hrs").style.visibility = "visible";
    document.querySelector(".min").style.visibility = "visible";
    document.querySelector(".sec").style.visibility = "visible";
    document.querySelector('.hrs').value = "";
    document.querySelector('.min').value = "";
    document.querySelector('.sec').value = "";
    document.title = "TIMER";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    fullSeconds = 0;
    pauseTimer = 1;
}

function pause(){
    document.querySelector(".reset").style.display = "inline";
    // document.querySelector(".hrs").style.visibility = "visible";
    // document.querySelector(".min").style.visibility = "visible";
    // document.querySelector(".sec").style.visibility = "visible";
    document.querySelector(".resume").style.display = "inline";
    // document.querySelector('.hrs').value = hours.innerHTML;
    // document.querySelector('.min').value = minutes.innerHTML;
    // document.querySelector('.sec').value = seconds.innerHTML;
    // fullSeconds = 0;
    pauseTimer = 1;
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
    if (pauseTimer === 0){
    timeNow = Math.floor(new Date().getTime() / 1000);
    currentTime = fullSeconds - (timeNow - startTime);
    // const currentTime = new Date();
    // const diff = currentTime - changeDate();

    // const d = Math.floor(currentTime / 1000 / 60 / 60 / 24);
    // const h = 1 + Math.floor(currentTime / 1000 / 60 / 60) % 24;
    // const m = Math.floor(currentTime / 1000 / 60) % 60;
    // const s = Math.floor(currentTimeff / 1000) % 60;

    // add values to dom
    // days.innerHTML = d;
    // hours.innerHTML = h < 10 ? "0" + h : h;
    // minutes.innerHTML = m < 10 ? "0" + m : m;
    // seconds.innerHTML = s < 10 ? "0" + s : s;
    if (currentTime < 0){
        return;
    }
    // if (pauseTimer === 0){
    //     fullSeconds--;
        const hors = Math.floor(currentTime / 60 / 60);
        const mnts = Math.floor((currentTime - (hors * 60 * 60)) / 60) % 60;
        const scnds = Math.floor(currentTime - (hors * 60 * 60) - (mnts * 60));

        hours.innerHTML = hors;
        minutes.innerHTML = mnts;
        seconds.innerHTML = scnds;

        document.title = "TIMER | " + hors + " : " + mnts + " : " + scnds;

        alert();
    //     buttons();
    // }
    }
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
    startTime = Math.floor(new Date().getTime() / 1000);
    document.querySelector(".hrs").style.visibility = "hidden";
    document.querySelector(".min").style.visibility = "hidden";
    document.querySelector(".sec").style.visibility = "hidden";
    document.querySelector(".startTimer").style.display = "none";
    document.querySelector(".pause").style.display = "inline";
    document.querySelector(".cleare").style.display = "inline";
    document.querySelector(".reset").style.display = "inline";

    if (document.querySelector('.hrs').value === "" && document.querySelector('.min').value === "" && document.querySelector('.sec').value === ""){
        document.querySelector('.hrs').value = 1;
        document.querySelector('.min').value = 0;
        document.querySelector('.sec').value = 0;
    }

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
    pauseTimer = 0;
    changeDate();
    saveTime = fullSeconds;

    // if (document.querySelector(".startTimer").innerText === "RESET"){
    //     pauseTimer = 1;
    //     document.querySelector(".startTimer").innerText = "START";
    //     fullSeconds = saveTime;
    // }

    // document.querySelector(".startTimer").innerText = "RESET";
}

setInterval(updateCountdown, 1000);