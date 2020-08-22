const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const msecond = document.getElementById("msec");
const countdown = document.getElementById("countdown");
const date = document.getElementById("date");
const loading = document.getElementById("loading");
// let sound = new Audio("mp3/alarm.mp3");

let fullSeconds = 0;
let mseconds = 0;
let pauseTimer = 1;
let intervalTime = 10;

let hors = 0;
let mnts = 0;
let scnds = 0;

document.getElementById("hours").style.display = "none";
document.getElementById("hoursUnderText").style.display = "none";
document.getElementById("minutes").style.display = "none";
document.getElementById("minutesUnderText").style.display = "none";

document.querySelector(".hrs").style.visibility = "hidden";
document.querySelector(".min").style.visibility = "hidden";
document.querySelector(".sec").style.visibility = "hidden";

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
    msec.innerHTML = "00";
    mseconds = 0;
}

// if (hours.innerHTML === "00"){
//     document.querySelector(".hours").style.visibility = "hidden";
// }

function miliseconds(){
    if (pauseTimer === 0){
        mseconds++;
        if (pauseTimer === 1){
            return;
        }
        msec.innerHTML = mseconds;
        updateCountdown();
    }
    if (hors > 0){
        document.getElementById("hours").style.display = "block";
        document.getElementById("hoursUnderText").style.display = "block";
    }
    if (mnts > 0){
        document.getElementById("minutes").style.display = "block";
        document.getElementById("minutesUnderText").style.display = "block";
    }
}

// && minutes.innerHTML === "0" && seconds.innerHTML === "0"

function startButton(){
    document.querySelector(".startTimer").style.visibility = "hidden";
    // if (document.querySelector('.hrs').value === "" && document.querySelector('.min').value === "" && document.querySelector('.sec').value === ""){
    //     fullSeconds = 0.0000000000000000001;
    //     updateCountdown();
    // } else {
    //     changeDate();
    //     updateCountdown();
    // }
    pauseTimer = 0;
    if (pauseTimer === 0){
        // interval();    
        miliseconds();
        updateCountdown();
    }
    if (pauseTimer === 0){
        intervalTime = 10;
    }
}

function pause(){
//     // document.querySelector('.hrs').value = hours.innerHTML;
//     // document.querySelector('.min').value = minutes.innerHTML;
//     // document.querySelector('.sec').value = seconds.innerHTML;
//     // fullSeconds = 0;
//     // // sound.pause();
//     // // sound.currentTime = 0;
//     // document.querySelector(".pause").innerText = "pause";
    document.querySelector(".startTimer").style.visibility = "visible";
//     // document.querySelector(".cleare").style.visibility = "visible";
//     // setTimeout(updateCountdown, 100000000000000);
    // setTimeout(miliseconds, 1000000000000);
    setInterval(miliseconds, 100000000000000);
    pauseTimer = 1;
}

function changeDate(){
    let hrs = document.querySelector('.hrs').valueAsNumber;
    let min = document.querySelector('.min').valueAsNumber;
    let sec = document.querySelector('.sec').valueAsNumber;
    const timeInSec = (hrs*60*60) + min*60 + sec;
    fullSeconds = timeInSec;
    return fullSeconds;
}

function updateCountdown() {
    if (pauseTimer === 1){
        return;
    }
    if (pauseTimer === 0){
        if (mseconds > 99){
            mseconds = 0;
            fullSeconds ++;
        // if (fullSeconds > 0){
        // fullSeconds++;
        // if (fullSeconds < 0){
        //     return;
        // }
    
        hors = Math.floor(fullSeconds / 60 / 60);
        mnts = Math.floor((fullSeconds - (hors * 60 * 60)) / 60) % 60;
        scnds = Math.floor(fullSeconds - (hors * 60 * 60) - (mnts * 60));
        
        hours.innerHTML = hors;
        minutes.innerHTML = mnts;
        seconds.innerHTML = scnds;
            
        // alert();
        // buttons();
        }
    }
}

// function buttons(){
//     if (hours.innerHTML === "0" && minutes.innerHTML === "0" && seconds.innerHTML === "0"){
//         document.querySelector(".startTimer").style.visibility = "hidden";
//         document.querySelector(".cleare").style.visibility = "hidden";
//         document.querySelector(".pause").innerText = "OK";
//     }
// }

// function alert(){
//     if (hours.innerHTML === "0" && minutes.innerHTML === "0" && seconds.innerHTML === "0"){
//         sound.play();
//         sound.volume = 0.01;
//     }
// }

if (fullSeconds === 0){
    setInterval(miliseconds, intervalTime);
    // can use some VARIABLE, because after resuming timer it starts in that milisecond where finished
}