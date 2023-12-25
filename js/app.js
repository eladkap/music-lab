/* GLOBALS */
const startButton = document.getElementById("start_btn");
startButton.addEventListener('click', () => {
    Synth.setAudioContext();
});

var canvas = document.getElementById("music_canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var CTX = canvas.getContext("2d");
var piano;

/* VARIALBES GIVEN BY SELECTORS */
var octaves = 4;
var sound = 'Piano';

function createPiano() {
    let noteWidth = Math.round((window.innerWidth - 2 * PIANO_OFFSET_X) / (7 * octaves));
    let noteHeight = noteWidth * 4;
    console.log(noteWidth);
    console.log(noteHeight);
    let pianoPosX = PIANO_OFFSET_X;
    let pianoPosY = window.innerHeight - noteHeight - PIANO_OFFSET_Y;
    piano = new Piano(pianoPosX, pianoPosY, octaves, noteWidth, noteHeight);
}

function displayPiano() {
    piano.display();
}

function main() {
    createPiano();
    piano.showNotes();
    displayPiano();

    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(Synth.success, Synth.fail);
    }
}

main();