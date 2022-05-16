
let stopwatchInterval ;
const deltaInMs = 100;
let timeInMs = 0;


function start() {
    if(stopwatchInterval){
        return;
    }
    stopwatchInterval =setInterval( function () {
        timeInMs = timeInMs + 100 ;
        document.getElementById('watch').innerHTML = stopwatchToString();
    },deltaInMs);
}

function stop() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = undefined ;
}

function reset() {
    timeInMs = 0 ;
    document.getElementById('watch').innerHTML = stopwatchToString();
}

function stopwatchToString() {
    const milliseconds = (timeInMs / 100) % 10;
    const second = Math.floor((timeInMs / 1000) % 60);
    const minutes = Math.floor(timeInMs / 1000 / 60);

    return `${minutes} : ${second} : ${milliseconds} `

}