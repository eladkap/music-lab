window.AudioContext = window.AudioContext || window.webkitAudioContext;

class Synth {
    static ctx = new AudioContext();
    static oscillators = {};
    static notes = {};

    static setAudioContext() {
        this.ctx = new AudioContext();
    }

    static midiToFrequency(midiNumber) {
        const A = 440;
        return (A / 32) * (2 ** ((midiNumber - 9) / 12));
    }

    static fail() {
        console.log('Could not connect to MIDI.');
    }
    
    static success(midiAccess) {
        console.log('success');
        midiAccess.addEventListener('statechange', Synth.updateDevices);
    
        const inputs = midiAccess.inputs;
        inputs.forEach(input => {
            input.addEventListener('midimessage', Synth.handleInput);
        });
    }

    static handleInput(event) {
        let command = event.data[0];
        let midiNumber = event.data[1];
        let velocity = event.data[2];
        let frequency = Synth.midiToFrequency(midiNumber);
        let sound = new Sound(midiNumber, frequency, velocity);
        switch (command) {
            case 144:
                // sound is on
                if (velocity > 0) {
                    Synth.soundOn(sound);
                    console.log(event);
                }
                // sound is off
                else {
                    Synth.soundOff(sound);
                }
                break;
            case 128:
                // sound is off
                Synth.soundOff(sound);
                break;
        } 
    }

    static soundOn(sound) {
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        oscGain.gain.value = 0.33;

        const velocityGainAmount = sound.velocity / 127;
        const velocityGain = this.ctx.createGain();
        velocityGain.gain.value = velocityGainAmount;

        osc.type = 'sine';
        osc.frequency.value = sound.frequency;

        osc.connect(oscGain);
        oscGain.connect(velocityGain);
        velocityGain.connect(this.ctx.destination);

        osc.gain = oscGain;
        this.oscillators[sound.midiNumber] = osc;

        osc.start();
    }
    
    static soundOff(sound) {
        const osc = this.oscillators[sound.midiNumber];
        const oscGain = osc.gain;
        oscGain.gain.setValueAtTime(oscGain.gain.value, this.ctx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.03);

        setTimeout(() => {
            osc.stop();
            osc.disconnect();
        }, 20);
        
        delete this.oscillators[sound.midiNumber];
    }

    static updateDevices(event) {
        let midiController = {
            'name': event.port.name,
            'brand': event.port.manufacturer,
            'state': event.port.state,
            'type': event.port.type
        }
        console.log(midiController);
    }

    static onKeyDown(key) {
        let symbol = KEYBOARD_MAP[key];
        console.log(symbol);
    }
}








