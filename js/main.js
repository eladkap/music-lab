
/* GLOBALS */
var canvas = document.getElementById("musicCanvas");
console.log(canvas);
var ctx = canvas.getContext("2d");
var keyboard;

function createKeyboard() {

}

function displayKeyboard() {

}

function main() {
    createKeyboard();

    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(Synth.success, Synth.fail);
    }


}

main();