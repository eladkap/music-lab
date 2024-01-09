class Note {
    constructor(x, y, width, height, symbol, midiNumber, isNatural) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.symbol = symbol;
        this.midiNumber = midiNumber;
        this.isNatural = isNatural;
        this.velocity = 0;
        this.isPlayed = false;
        this.color = isNatural ? NATURAL_NOTE_COLOR : SHARP_NOTE_COLOR;
    }

    display() {
        CTX.beginPath();
        CTX.strokeStyle = 'black';
        CTX.fillStyle = this.color;
        CTX.roundRect(this.x, this.y, this.width, this.height, 5);
        CTX.lineWidth = 1;
        CTX.stroke();
        CTX.fill();
        
        // CTX.font = '8px Arial';
        // CTX.strokeText(this.symbol, this.x + this.width / 5, this.y - 5);
        // CTX.closePath();
    }

    containsPoint(x, y)  {
        return x > this.x && x < (this.x + this.width) &&
            y > this.y && y < (this.y + this.height)
    }

    setHighlight(b) {
        if (b) {
            this.color = this.isNatural ? NATURAL_NOTE_COLOR_H : SHARP_NOTE_COLOR_H;
        }
        else {
            this.color = this.isNatural ? NATURAL_NOTE_COLOR : SHARP_NOTE_COLOR;
        }
    }
}