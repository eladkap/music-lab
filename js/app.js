/* GLOBALS */
const startButton = document.getElementById("start-btn");
startButton.addEventListener('click', () => {
    Synth.setAudioContext();
});

var canvas = document.getElementById("music-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var CTX = canvas.getContext("2d");

/* VARIALBES */
var controller;


function createController() {
    controller = new Controller();
}

function displayController() {
    controller.display();
}

function soundChanged() {
    let soundController = document.getElementById("sound-selector");
    let chosenSound = soundController.value;
    console.log(chosenSound);
}

function keysChanged() {
    let keysController = document.getElementById("keys-selector");
    let keysNumber = keysController.value;
    let range = NOTE_RANGES[keysNumber];
    console.log(Utils.getAllNaturalNotes(range));

    // CTX.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // let range = ['C1', 'A7'];
    // createPiano(range);
    // createPiano(octaves);
    // displayPiano();
}

function main() {
    createController();
    displayController();

    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(Synth.success, Synth.fail);
    }

    
}

main();