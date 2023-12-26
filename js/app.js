/* GLOBALS */
const startButton = document.getElementById("start-btn");
startButton.addEventListener('click', () => {
    Synth.setAudioContext();
});

var canvas = document.getElementById("music-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var CTX = canvas.getContext("2d");
var piano;

/* VARIALBES GIVEN BY SELECTORS */
var octaves = 4;
var sound = 'Piano';

function createPiano(octaves) {
    let noteWidth = Math.round((window.innerWidth - 2 * PIANO_OFFSET_X) / (7 * octaves));
    let noteHeight = noteWidth * 5;
    let pianoPosX = PIANO_OFFSET_X;
    let pianoPosY = window.innerHeight - noteHeight - PIANO_OFFSET_Y;
    piano = new Piano(pianoPosX, pianoPosY, Number(octaves), noteWidth, noteHeight);
}

function displayPiano() {
    piano.display();
}

function octavesChanged() {
    octaves = document.getElementById("octaves").value;
    CTX.clearRect(0, 0, window.innerWidth, window.innerHeight);
    createPiano(octaves);
    displayPiano();
}

function main() {
    createPiano(octaves);
    piano.showNotes();
    displayPiano();

    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(Synth.success, Synth.fail);
    }

    console.log(Utils.getAllNaturalNotes('F2', 'A7'));
}

main();