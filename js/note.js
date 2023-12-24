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
        CTX.strokeStyle = "rgb(0, 0, 0)";
        if (this.isNatural) {
            CTX.fillStyle = "rgb(255, 255, 255)";
        }
        else {
            CTX.fillStyle = "rgb(0, 0, 0)";
        }
        CTX.fillRect(this.x, this.y, this.width, this.height);
        CTX.stroke();
        
        CTX.font = "14px Arial";
        CTX.strokeText(this.symbol, this.x + this.width / 5, this.y);
    }

    highlight() {

    }
}