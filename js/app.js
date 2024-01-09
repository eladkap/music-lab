/* GLOBALS */
const startButton = document.getElementById("start-btn");
startButton.addEventListener('click', () => {
    Synth.setAudioContext();
});

var canvas = document.getElementById("music-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var CTX = canvas.getContext("2d");

// canvas.addEventListener('mousemove', (event) => {
//     onMouseover(event);
// });

/* VARIALBES */
var controller;


function createController() {
    controller = new Controller(SOUND_OPTIONS, KEYS_OPTIONS[0]);
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

    CTX.clearRect(0, 0, window.innerWidth, window.innerHeight);
    controller.setPiano(keysNumber);
    controller.display();
    console.log(controller.piano);
}

function onMouseover(event) {
    for (let note of controller.piano.notes) {
        if (note.containsPoint(event.clientX, event.clientY)) {
            note.setHighlight(true);
            note.display();
        }
        else {
            note.setHighlight(false);
            note.display();
        }
    }
}

function main() {
    createController();
    controller.display();
    controller.piano.showNotes();

    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(Synth.success, Synth.fail);
    } 

    
}

main();