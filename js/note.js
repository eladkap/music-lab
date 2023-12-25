class Note {
    constructor(x, y, width, height, symbol, midiNumber, isNatural) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.symbol = symbol;
        this.midiNumber = midiNumber;
        this.isNatural = isNatural;
        this.isPlayed = false;
    }

    display() {
        CTX.beginPath();
        CTX.strokeStyle = 'black';
        if (this.isNatural) {
            CTX.fillStyle = NATURAL_NOTE_COLOR;
        }
        else {
            CTX.fillStyle = SHARP_NOTE_COLOR;
        }
        CTX.roundRect(this.x, this.y, this.width, this.height, 5);
        CTX.lineWidth = 1;
        CTX.stroke();
        CTX.fill();
        
        // CTX.font = '8px Arial';
        // CTX.strokeText(this.symbol, this.x + this.width / 5, this.y - 5);
        // CTX.closePath();
    }

    highlight() {

    }
}