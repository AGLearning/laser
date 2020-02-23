import Snap = require('snapsvg');

export class SvgBuilder {
  private snap: any;

  /***
   * unit - in mm (bok kratki)
   */
  constructor(width: number, height: number, unit: number) {
    this.snap = Snap(width * unit, height * unit);
    this.snap.circle(10, 10, 20).attr({fill: "none", stroke: "#000", strokeWidth: 1});
  }

  addPoints() {
  }

  build(){

  }
}
