abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //Some complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public camaraMode: string,
    public filter: string,
    public burstPhoto: number
  ) {
    super(camaraMode, filter);
  }

  getSepia(): void {
    console.log(`Sepia`);
  }
}

const diego = new Instagram("test", "test", 3);
export {};
