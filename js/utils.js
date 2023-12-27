class Utils {
    static getAllNaturalNotes(range){
        let firstNote = range[0];
        let lastNote = range[1];
        let naturalNotes = [];

        let firstOctaveNumber = Number(firstNote[1]);
        let lastOctaveNumber = Number(lastNote[1]);
        let firstNoteSymbol = firstNote[0];
        let lastNoteSymbol = lastNote[0];
        let firstNoteIndex = NATURAL_SYMBOLS.indexOf(firstNoteSymbol);
        let lastNoteIndex = NATURAL_SYMBOLS.indexOf(lastNoteSymbol);

        for (let octaveNumber = firstOctaveNumber; octaveNumber <= lastOctaveNumber; octaveNumber++) {
            if (octaveNumber == firstOctaveNumber) {
                NATURAL_SYMBOLS.slice(firstNoteIndex).forEach((noteSymbol => {
                    naturalNotes.push(noteSymbol + octaveNumber);
                }));
            }
            else if (octaveNumber == lastOctaveNumber) {
                NATURAL_SYMBOLS.slice(0, lastNoteIndex + 1).forEach((noteSymbol => {
                    naturalNotes.push(noteSymbol + octaveNumber);
                }));
            }
            else {
                NATURAL_SYMBOLS.forEach((noteSymbol) => {
                    naturalNotes.push(noteSymbol + octaveNumber);
                })
            }
        }
        return naturalNotes.flat();
    }
}