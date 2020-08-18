const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const date = document.getElementById("date");
const loading = document.getElementById("loading");

let fullSeconds = 0;

// if (document.querySelector('.hrs').valueAsNumber === ""){
//     hours.innerHTML = 0;
// }
// if (document.querySelector('.min').valueAsNumber === ""){
//     hours.innerHTML = 0;
// }
// if (document.querySelector('.sec').valueAsNumber === ""){
//     hours.innerHTML = 0;
// }

document.querySelector('.startTimer').addEventListener('click', pause);
document.querySelector('.clear').addEventListener('click', clearAll);

function clearAll(){
    hrs.innerHTML = 0;
    min.innerHTML = 0;
    sec.innerHTML = 0;
}

function changeDate(){
    let hrs = document.querySelector('.hrs').valueAsNumber;
    let min = document.querySelector('.min').valueAsNumber;
    let sec = document.querySelector('.sec').valueAsNumber;
//   const hors = new Date(hrs);
//   const mnts = new Date(min);
//   const scnd = new Date(sec);
    // hours.innerHTML = hrs;
    // minutes.innerHTML = min;
    // seconds.innerHTML = sec;
    const timeInSec = (hrs*60*60) + min*60 + sec;
    fullSeconds = timeInSec;
    return fullSeconds;
}

// fullSeconds = changeDate();
//background year
// document.querySelector('.date').innerText = new Date().toLocaleDateString();
// const startDate = new Date(document.querySelector('.newDate').valueAsNumber);

//update time
function updateCountdown() {
//   const currentTime = new Date();
// changeDate();
fullSeconds--;
const hors = Math.floor(fullSeconds / 60 / 60);
const mnts = Math.floor((fullSeconds - (hors * 60 * 60)) / 60) % 60;
const scnds = Math.floor(fullSeconds - (hors * 60 * 60) - (mnts * 60));

hours.innerHTML = hors;
minutes.innerHTML = mnts;
seconds.innerHTML = scnds;


// const diff = changeDate();

// //   const d = Math.floor(diff / 1000 / 60 / 60 / 24);
//   const h = Math.floor(diff) % 60;
//   const m = diff % 60;
//   const s = Math.floor(diff / 1000) % 60;

//   // add values to dom
//   days.innerHTML = d;


//   hours.innerHTML = ;
//   minutes.innerHTML = ;
//   seconds.innerHTML = ;
}

// show spinner before countdown                                // ?????
// setTimeout(() => {
//   loading.remove();
//   countdown.style.display = "flex";
// }, 1000);

// run every second
function pause(){
    changeDate();
    setInterval(updateCountdown, 1000);
}