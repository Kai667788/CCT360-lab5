// CCT360 Lab 5 - Kevin Wang
// Using the audio methods and events from Class 7.

let player = document.getElementById("cityAudio");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let downBtn = document.getElementById("downBtn");
let upBtn = document.getElementById("upBtn");
let cityImage = document.getElementById("cityImage");
let pictureBox = document.getElementById("pictureBox");
let sceneName = document.getElementById("sceneName");
let message = document.getElementById("message");
let timeMessage = document.getElementById("timeMessage");
let sceneNumber = 1;

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);
downBtn.addEventListener("click", volumeDown);
upBtn.addEventListener("click", volumeUp);

player.addEventListener("play", playerStarted);
player.addEventListener("pause", playerPaused);
player.addEventListener("ended", playerEnded);
player.addEventListener("timeupdate", updateScene);

function playAudio() {
    player.play();
}

function pauseAudio() {
    player.pause();
}

function stopAudio() {
    player.pause();
    player.currentTime = 0;
    updateScene();
    message.innerHTML = "The soundscape is stopped.";
}

function volumeUp() {
    let volume = player.volume + 0.1;
    if (volume > 1) {
        volume = 1;
    }
    player.volume = volume;
}

function volumeDown() {
    let volume = player.volume - 0.1;
    if (volume < 0) {
        volume = 0;
    }
    player.volume = volume;
}

function playerStarted() {
    message.innerHTML = "The city sounds are playing.";
    cityImage.style.opacity = "1";
    pictureBox.style.borderColor = "#6ba68f";
}

function playerPaused() {
    message.innerHTML = "The soundscape is paused.";
    cityImage.style.opacity = "0.72";
    pictureBox.style.borderColor = "#c5d7de";
}

function playerEnded() {
    message.innerHTML = "You have reached the end of the sound diary!";
    cityImage.style.opacity = "0.72";
    pictureBox.style.borderColor = "#c5d7de";
}

function updateScene() {
    let seconds = Math.floor(player.currentTime);
    timeMessage.innerHTML = "Time: " + seconds + " / 80 seconds";

    if (seconds < 26 && sceneNumber != 1) {
        sceneNumber = 1;
        cityImage.src = "images/street.jpg";
        cityImage.alt = "Illustration of a bus and city traffic";
        sceneName.innerHTML = "1. Streets in the Morning";
    } else if (seconds >= 26 && seconds < 53 && sceneNumber != 2) {
        sceneNumber = 2;
        cityImage.src = "images/subway.jpg";
        cityImage.alt = "Illustration of a subway inside a tunnel";
        sceneName.innerHTML = "2. Riding the Subway";
    } else if (seconds >= 53 && sceneNumber != 3) {
        sceneNumber = 3;
        cityImage.src = "images/go-station.jpg";
        cityImage.alt = "Illustration of a green and white train at a station";
        sceneName.innerHTML = "3. Arriving at the Station";
    }
}
