class Piano {
    constructor(x, y, octaves) {
        this.x = x;
        this.y = y;
        this.octaves = octaves;
        this.notes = this.setNotes();
    }

    setNotes() {
        // let notes = new Map();
        let notes = [];

        let noteIndex = 0;
        for (let octave = 0; octave < this.octaves; octave++) {
            for (let i = 0; i < SYMBOLS.length; i++) {
                let symbol = `${SYMBOLS[i]}${octave}`;
                let isNatural = !symbol.includes('#') && !symbol.includes('b');
                let midiNumber = noteIndex;
                let x = 0;
                let y = 0;
                if (isNatural) {
                    x = this.x + noteIndex * WHITE_NOTE_WIDTH;
                    y = this.y + WHITE_NOTE_HEIGHT;
                }
                else {
                    x = (this.x + noteIndex * WHITE_NOTE_WIDTH) - (WHITE_NOTE_WIDTH * 0.5);
                    y = this.y + WHITE_NOTE_HEIGHT;
                }
                let note = new Note(
                    x,
                    y,
                    WHITE_NOTE_WIDTH / 2,
                    WHITE_NOTE_HEIGHT * 0.7,
                    symbol,
                    midiNumber,
                    isNatural
                );
                notes.push(note);
                noteIndex++;
            }
            
        }

        return notes;
    }

    display() {
        for (let note of this.notes) {
            note.display();
        }
    }

    showNotes() {
        console.log(this.notes);
    }
}