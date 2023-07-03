"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //Some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(camaraMode, filter, burstPhoto) {
        super(camaraMode, filter);
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burstPhoto = burstPhoto;
    }
    getSepia() {
        console.log(`Sepia`);
    }
}
const diego = new Instagram("test", "test", 3);
