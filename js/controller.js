class Controller {
    constructor(sound, keysNumber) {
        this.sound = sound;
        this.keysNumber = keysNumber;
        this.piano = this.createPiano(keysNumber);
        this.octave = 1;
        this.gain = 50;
        this.tempo = 100;
        this.playedNotes = [];
        this.playedChord = '';
    }

    createPiano(keysNumber) {
        let octaves = 5;
        let noteWidth = Math.round((window.innerWidth - 2 * PIANO_OFFSET_X) / (7 * octaves));
        let noteHeight = noteWidth * 5;
        let pianoPosX = PIANO_OFFSET_X;
        let pianoPosY = window.innerHeight - noteHeight - PIANO_OFFSET_Y;
        let piano = new Piano(pianoPosX, pianoPosY, NOTE_RANGES[keysNumber], noteWidth, noteHeight);
        return piano;
    }

    display() {
        this.piano.display();
    }

    incrementOctave() {
        if (this.octave < MAX_OCTAVE) {
            this.octave++;
        }  
    }

    decrementOctave() {
        if (this.octave > 0) {
            this.octave--;
        }
    }

    changeSound(sound) {
        this.sound = sound;
    }

    changeKeysNumber(keys) {
        this.keysNumber = keys;
    }
}