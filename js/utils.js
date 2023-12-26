class Utils {
    static getAllNaturalNotes(firstNote, lastNote){
        let notes = [];

        let firstOctaveNumber = Number(firstNote[1]);
        let lastOctaveNumber = Number(lastNote[1]);
        let firstNoteSymbol = firstNote[0];
        let lastNoteSymbol = lastNote[0];
        let firstNoteIndex = NATURAL_SYMBOLS.indexOf(firstNoteSymbol);
        let lastNoteIndex = NATURAL_SYMBOLS.indexOf(lastNoteSymbol);

        for (let octaveNumber = firstOctaveNumber; octaveNumber <= lastOctaveNumber; octaveNumber++) {
            if (octaveNumber == firstOctaveNumber) {
                let firstOctave = NATURAL_SYMBOLS.slice(firstNoteIndex).map((noteSymbol => {
                    return noteSymbol + octaveNumber
                }));
                notes.push(firstOctave);
            }
            else if (octaveNumber == lastOctaveNumber) {
                let lastOctave = NATURAL_SYMBOLS.slice(0, lastNoteIndex + 1).map((noteSymbol => {
                    return noteSymbol + octaveNumber
                }));
                notes.push(lastOctave);
            }
            else {
                notes.push(NATURAL_SYMBOLS.map((noteSymbol) => {
                    return noteSymbol + octaveNumber;
                }));
            }
        }
        return notes.flat();
    }
}