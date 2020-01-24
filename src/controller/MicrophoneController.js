import { ClassEvent } from "../util/ClassEvent";

export class MicrophoneController extends ClassEvent {

    constructor() {

        super()

        navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(stream => {

            this._stream = stream;

            let mediaStream = new MediaStream(this._stream);
            let audio = new Audio()
            audio.srcObject = mediaStream
            audio.play()

            this.trigger('play', audio)

        }).catch(error => {
            console.error(error);
        });

    }

    stop() {

        this._stream.getTracks().forEach(track => track.stop())

    }

}