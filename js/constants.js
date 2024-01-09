const MAX_OCTAVES = 10;

const PIANO_OFFSET_X = 10;
const PIANO_OFFSET_Y = 80;

const ALL_SYMBOLS = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
]

const NATURAL_SYMBOLS = ['C', 'D','E', 'F', 'G', 'A', 'B'];
const SHARP_SYMBOLS = ['C', 'D', 'F', 'G', 'A'];


const NATURAL_NOTE_COLOR = 'rgb(250, 250, 250)';
const SHARP_NOTE_COLOR = 'rgb(50, 50, 50)';
const NATURAL_NOTE_COLOR_H = 'rgb(180, 250, 250)';
const SHARP_NOTE_COLOR_H = 'rgb(80, 80, 80)';


SOUND_OPTIONS = [
    'Piano',
    'Organ',
    'Guitar',
    'String'
]

KEYS_OPTIONS = ['49', '61', '88'];

const NOTE_RANGES = {
    '49': ['A1', 'A5'],
    '61': ['C1', 'C6'],
    '88': ['A0', 'C8']
}