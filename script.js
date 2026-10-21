// CCT360 Lab 5 - Kevin Wang
// I am practising the audio functions from Class 7.

let player = document.getElementById("cityAudio");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let stationImage = document.getElementById("stationImage");
let pictureBox = document.getElementById("pictureBox");
let message = document.getElementById("message");

playBtn.addEventListener("click", playSound);
pauseBtn.addEventListener("click", pauseSound);
stopBtn.addEventListener("click", stopSound);

player.addEventListener("play", soundStarted);
player.addEventListener("pause", soundPaused);
player.addEventListener("ended", soundEnded);

function playSound() {
    player.play();
}

function pauseSound() {
    player.pause();
}

function stopSound() {
    player.currentTime = 0;
    player.pause();
    message.innerHTML = "The sound is stopped.";
}

function soundStarted() {
    message.innerHTML = "The station sound is playing.";
    stationImage.style.opacity = "1";
    pictureBox.style.borderColor = "#4c947c";
}

function soundPaused() {
    message.innerHTML = "The sound is paused.";
    stationImage.style.opacity = "0.65";
    pictureBox.style.borderColor = "#c5d3dc";
}

function soundEnded() {
    message.innerHTML = "The sound has finished.";
    stationImage.style.opacity = "0.65";
    pictureBox.style.borderColor = "#c5d3dc";
}
