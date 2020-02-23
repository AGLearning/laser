import "snapsvg-cjs";

declare var Snap: any;

export class SvgBuilder {
  private snap: any;

  /***
   * unit - in mm (bok kratki)
   */
  constructor(width: number, height: number, unit: number) {
    this.snap = Snap(width * unit, height * unit);
    this.snap.circle(150, 150, 100);
  }

  addPoints() {
  }

  build(){

  }
}
