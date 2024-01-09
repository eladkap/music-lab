class Piano {
    constructor(range) {
        this.x = 0;
        this.y = 0;
        this.range = range;
        this.allNotes = this.setAllNotes();
        this.notesMap = this.setNotesMap(this.notes);
        this.notes = this.setNotesByRange(range)
    }

    calcMidiNumber(symbol, octave) {
        let symbolIndex = ALL_SYMBOLS.indexOf(symbol);
        return octave * ALL_SYMBOLS.length + symbolIndex;
    }

    setAllNotes() {
        let notes = [];
        let octaves = MAX_OCTAVES;

        // let noteWidth = Math.round((window.innerWidth - 2 * PIANO_OFFSET_X) / naturalNotes.length);
        // let noteHeight = noteWidth * 5;

        // let x = PIANO_OFFSET_X;
        // let y = window.innerHeight - noteHeight - PIANO_OFFSET_Y;
        let x = 0;
        let y = 0;
        let w = 1;
        let h = 1;
        for (let octave = 0; octave < octaves; octave++) {
            for (let symbol of ALL_SYMBOLS) {
                let isNatural = !symbol.includes('#');
                let noteSymbol =  `${symbol}${octave}`;
                let midiNumber = this.calcMidiNumber(symbol, octave);
                let note = new Note(x, y, w, h, noteSymbol, midiNumber, isNatural);
                notes.push(note);
            }
        }
        return notes;
    }

    // set notes by octaves
    setNotesOld(range) {
        let notes = [];
        let noteIndex = 0;
        let octaves = 8;

        let noteWidth = Math.round((window.innerWidth - 2 * PIANO_OFFSET_X) / naturalNotes.length);
        let noteHeight = noteWidth * 5;

        this.x = PIANO_OFFSET_X;
        this.y = window.innerHeight - noteHeight - PIANO_OFFSET_Y;
        
        for (let octave = 0; octave < octaves; octave++) {
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

    setNotesMap(notes) {
        let notesMap = new Map();
        for (let note of this.allNotes) {
            notesMap.set(note.midiNumber, note);
        }
        return notesMap;
    }

    getMidiNumberBySymbol(symbol) {
        for (let note of this.allNotes) {
            if (note.symbol == symbol) {
                return note.midiNumber;
            }
        }
        return -1;
    }

    setNotesByRange(range) {
        let filteredNotes = [];
        let firstSymbol = range[0];
        let lastSymbol = range[1];
        let firstMidiNumber = this.getMidiNumberBySymbol(firstSymbol);
        let lastMidiNumber = this.getMidiNumberBySymbol(lastSymbol);
        for (let note of this.allNotes) {
            if (note.midiNumber >= firstMidiNumber && note.midiNumber <= lastMidiNumber) {
                filteredNotes.push(note);
            }
        }

        return filteredNotes;
    }

    display() {
        for (let note of this.notes) {
            note.display();
        }
    }

    showNotes() {
        for (let note of this.notes) {
            note.display();
        }
        console.log(this.notes);
        console.log(this.notesMap);
    }
}