
let hour = 0;
let minute = 0;
let seconds = 0;
let milliseconds = 70;
let intervalid = null;


//timer Logic
function logic() {

    if (Number(milliseconds) > 999) {
        seconds = Number(seconds) + 1;
        milliseconds = 70;
    }
    if (Number(seconds) > 59) {
        minute = Number(minute) + 1;
        seconds = 0;
    }
    if (Number(minute) > 59) {
        hour = Number(hour) + 1;
        minute = 0;
    }
    if (Number(hour) > 23) {
        hour = 0;
    }
}
function displayupdate(){
    milliseconds = Number(milliseconds) + 70;
    logic();
    let allfunctions = [hour, minute, seconds, milliseconds];
    allfunctions = allfunctions.map(padding);

    hour = allfunctions[0];
    minute = allfunctions[1];
    seconds = allfunctions[2];
    milliseconds = allfunctions[3];
    console.log(allfunctions)
    document.getElementById("display").textContent = `${hour}:${minute}:${seconds}:${milliseconds}`;
}

let display = document.getElementById("display");

function padding(time) {
    if (time > 69) {
        time = String(time).padStart(3, "0");
        return time;
    }
    else {
        time = String(time).padStart(2, "0");
        return time;
    }
}

function reset() {
    display.textContent = "00:00:00:000";
    hour = 0;
    minute = 0;
    seconds = 0;
    milliseconds = 70;
    if(intervalid !== null){
        clearInterval(intervalid)
        intervalid = null;
    }

}

function start(  ){
    if (intervalid===null){
        intervalid =   setInterval(displayupdate,70)
    }
    
}

function stop(){
    if(intervalid !== null){
        clearInterval(intervalid)
        intervalid = null;
    }
    
    
}



// start();
// setInterval(start,70)
