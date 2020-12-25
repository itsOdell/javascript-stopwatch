//              TIME VARIABLES
let min = document.querySelector("#min"),
    sec = document.querySelector("#sec"),
    mili = document.querySelector("#mili");


//              BUTTON VARIABLES    
let stop = document.querySelector(".stop"),
    start = document.querySelector(".start"),
    reset = document.querySelector(".reset");


//              GENERAL VARIABLES   
let counterForMili = 0,
    updateMili,
    counterForSec = 0,
    counterForMin = 0,
    clickedOnce = false;


//              EVENT LISTENERS FOR BUTTONS
start.addEventListener("click", startFunc);
stop.addEventListener("click", stopFunc);
reset.addEventListener("click", resetFunc);


//              FUNCTION FOR EVENT LISNTENERS
function startFunc() {
    if (clickedOnce == false) {
        clickedOnce = true;
        updateMili = setInterval(function () {
            if (counterForMili >= 100) {
                counterForMili = 0;
                updateSec();
            } else {
                counterForMili++;
                mili.innerHTML = counterForMili;
            }
        }, 10);
    } else {}
}


function stopFunc() {
    clickedOnce = false;
    clearInterval(updateMili);
}


function resetFunc() {
    clickedOnce = false;
    counterForSec = 0;
    counterForMili = 0;
    counterForMin = 0;
    min.innerHTML = counterForMin;
    sec.innerHTML = counterForSec;
    mili.innerHTML = counterForMili;
    clearInterval(updateMili);
}


//              CALLED FUNCTIONS   
function updateSec() {
    if (counterForSec >= 60) {
        counterForSec = 0;
        updateMin();
    } else {
        counterForSec++;
        sec.innerHTML = counterForSec;
    }
}


function updateMin() {
        counterForMin++;
        min.innerHTML = counterForMin;
}