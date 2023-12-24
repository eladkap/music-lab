
/* GLOBALS */
var canvas = document.getElementById("musicCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var CTX = canvas.getContext("2d");
var piano;

function createPiano() {
    piano = new Piano(PIANO_POS_X, PIANO_POS_Y, 2);
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