class Piano {
    constructor(range) {
        this.x = 0;
        this.y = 0;
        this.range = range;
        this.notes = this.setup(range);
    }

    setup(range) {
        let notes = [];
        let naturalNotes = Utils.getAllNaturalNotes(range);

        let noteWidth = Math.round((window.innerWidth - 2 * PIANO_OFFSET_X) / naturalNotes.length);
        let noteHeight = noteWidth * 5;

        this.x = PIANO_OFFSET_X;
        this.y = window.innerHeight - noteHeight - PIANO_OFFSET_Y;

        for (let i = 0; i < naturalNotes.length; i++) {
            let symbol = naturalNotes[i];
            let midiNumber = i;
            let x = this.x + i * noteWidth;
            let y = this.y;
            let w = noteWidth;
            let h = noteHeight;
            let note = new Note(x, y, w, h, symbol, midiNumber, true);
            notes.push(note);
        }
        return notes;
    }

    setNotes() {
        // let notes = new Map();
        let notes = [];
        let noteIndex = 0;
        
        for (let octave = 0; octave < this.octaves; octave++) {
            // handle natural notes
            for (let i = 0; i < NATURAL_SYMBOLS.length; i++) {
                let symbol = `${NATURAL_SYMBOLS[i]}${octave}`;
                let midiNumber = noteIndex;
                let x = this.x + noteIndex * this.noteWidth;
                let y = this.y;
                let w = this.noteWidth;
                let h = this.noteHeight;
                let note = new Note(x, y, w, h, symbol, midiNumber, true);
                notes.push(note);
                noteIndex++;
            }

            // handle sharp notes
            for (let i = 0; i < SHARP_SYMBOLS.length; i++) {
                let symbol = `${SHARP_SYMBOLS[i]}${octave}`;
                let midiNumber = noteIndex;
                let x = this.x + (i + 1 + octave * 7 + (i > 1)) * this.noteWidth - this.noteWidth / 4;
                let y = this.y;
                let w = this.noteWidth / 2;
                let h = this.noteHeight * 0.6;
                let note = new Note(x, y, w, h, symbol, midiNumber, false);
                notes.push(note);
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