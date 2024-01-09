class Piano {
    constructor(range) {
        this.x = 0;
        this.y = 0;
        this.range = range;
        this.notes = this.setAllNotes();  
        this.notesMap = this.setNotesMap();
        this.notes = this.setNotesByRange(range);
        this.setNotesGraphics();
    }

    calcMidiNumber(symbol, octave) {
        let symbolIndex = ALL_SYMBOLS.indexOf(symbol);
        return octave * ALL_SYMBOLS.length + symbolIndex;
    }

    setAllNotes() {
        let notes = [];
        for (let octave = 0; octave < MAX_OCTAVES; octave++) {
            for (let symbol of ALL_SYMBOLS) {
                let isNatural = !symbol.includes('#');
                let noteSymbol =  `${symbol}${octave}`;
                let midiNumber = this.calcMidiNumber(symbol, octave);
                let note = new Note(0, 0, 0, 0, noteSymbol, midiNumber, isNatural);
                notes.push(note);
            }
        }
        return notes;
    }

    getIndexBySymbol(symbol) {
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].symbol == symbol) {
                return i;
            }
        }
        return -1;
    }

    setNotesGraphics() {
        let naturalNotesCount = this.notes.filter(note => note.isNatural).length;
        let noteWidth = Math.round((window.innerWidth - 2 * PIANO_OFFSET_X) / naturalNotesCount);
        let noteHeight = noteWidth * 5;
        this.x = PIANO_OFFSET_X;
        this.y = window.innerHeight - noteHeight - PIANO_OFFSET_Y;
        
        let noteIndex = 0;
        for (let i = 0; i < this.notes.length; i++) {
            // handle natural notes
            if (this.notes[i].isNatural) {
                let x = this.x + noteIndex * noteWidth;
                let y = this.y;
                let w = noteWidth;
                let h = noteHeight;
                this.notes[i].x = x;
                this.notes[i].y = y;
                this.notes[i].width = w;
                this.notes[i].height = h;
                noteIndex++;
            }
        }
        
        let sharpPosX = PIANO_OFFSET_X + noteWidth * 0.75;
        let noteKey = this.notes[0].symbol[0];
        if (!SHARP_SYMBOLS.includes(noteKey)) {
            sharpPosX += noteWidth;
        }

        for (let i = 0; i < this.notes.length; i++) {
            let noteKey = this.notes[i].symbol[0];
            
            // handle sharp notes
            if (!this.notes[i].isNatural) {
                let y = this.y;
                let w = noteWidth / 2;
                let h = noteHeight * 0.6;
                this.notes[i].x = sharpPosX;
                this.notes[i].y = y;
                this.notes[i].width = w;
                this.notes[i].height = h;

                if (['D', 'A'].includes(noteKey)) {
                    sharpPosX = sharpPosX + (noteWidth * 2);
                }
                else {
                   sharpPosX += noteWidth;
                }
            }  
        }
    }

    setNotesMap() {
        let notesMap = new Map();
        for (let note of this.notes) {
            notesMap.set(note.midiNumber, note);
        }
        return notesMap;
    }

    getMidiNumberBySymbol(symbol) {
        for (let note of this.notes) {
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
        for (let note of this.notes) {
            if (note.midiNumber >= firstMidiNumber && note.midiNumber <= lastMidiNumber) {
                filteredNotes.push(note);
            }
        }
        return filteredNotes;
    }

    display() {
        // display natural notes
        for (let note of this.notes) {
            if (note.isNatural) {
                note.display();
            }
        }

        // display sharp notes
        for (let note of this.notes) {
            if (!note.isNatural) {
                note.display();
            }
        }
    }

    showNotes() {
        console.log(this.notes);
        console.log(this.notesMap);
    }
}