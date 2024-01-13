/* GLOBALS */
const startButton = document.getElementById("start-btn");

var canvas = document.getElementById("music-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var CTX = canvas.getContext("2d");

// canvas.addEventListener('mousemove', (event) => {
//     onMouseover(event);
// });

window.addEventListener("keydown", (event) => {
    Synth.onKeyDown(event.key);
});

/* VARIALBES */
var controller = new Controller(SOUND_OPTIONS, KEYS_OPTIONS[0]);

startButton.addEventListener('click', () => {
    // Synth.setAudioContext();
    Synth.ctx.resume().then(() => {

    });
});


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
    controller.display();
    controller.piano.showNotes();

    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(Synth.success, Synth.fail);
    }

    // controller.piano.highlightNotes(['C3', 'E3', 'G3']);
    // controller.display();
}

main();