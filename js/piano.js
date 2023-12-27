class Piano {
    constructor(x, y, range, noteWidth, noteHeight) {
        this.x = x;
        this.y = y;
        this.range = range;
        this.octaves = 5;
        this.noteWidth = noteWidth;
        this.noteHeight = noteHeight;
        this.notes = this.setNotes();
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