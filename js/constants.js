const MAX_OCTAVES = 10;

const PIANO_OFFSET_X = 10;
const PIANO_OFFSET_Y = 80;

const SHARP_SYMBOL = '♯';

const ALL_SYMBOLS = [
    'C',
    `C${SHARP_SYMBOL}`,
    'D',
    `D${SHARP_SYMBOL}`,
    'E',
    'F',
    `F${SHARP_SYMBOL}`,
    'G',
    `G${SHARP_SYMBOL}`,
    'A',
    `A${SHARP_SYMBOL}`,
    'B'
]

const NATURAL_SYMBOLS = ['C', 'D','E', 'F', 'G', 'A', 'B'];
const SHARP_SYMBOLS = ['C', 'D', 'F', 'G', 'A'];


const NATURAL_NOTE_COLOR = 'rgb(250, 250, 250)';
const SHARP_NOTE_COLOR = 'rgb(50, 50, 50)';
const NATURAL_NOTE_COLOR_H = 'rgb(180, 250, 250)';
const SHARP_NOTE_COLOR_H = 'rgb(80, 80, 80)';


const SOUND_OPTIONS = [
    'Piano',
    'Organ',
    'Guitar',
    'String'
]

const KEYS_OPTIONS = ['49', '61', '88'];

const NOTE_RANGES = {
    '49': ['A1', 'A5'],
    '61': ['C1', 'C6'],
    '88': ['A0', 'C8']
}

const KEYBOARD_MAP = {
    'a': 'C1',
    's': 'D1',
    'd': 'E1',
    'f': 'F1',
    'g': 'G1'
}
