class Controller {
    constructor(sound, keysNumber) {
        this.sound = sound;
        this.keysNumber = keysNumber;
        this.setPiano(keysNumber);
        this.octave = 1;
        this.gain = 50;
        this.tempo = 100;
        // this.playedNotes = [];
        // this.playedChord = '';
    }

    setPiano(keysNumber) {
        console.log(`Range: ${NOTE_RANGES[keysNumber]}`);
        this.piano = new Piano(NOTE_RANGES[keysNumber]);
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