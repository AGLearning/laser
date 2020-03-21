import "snapsvg-cjs";

declare var Snap: any;
import { Circle } from './model/circle';

export class SvgBuilder {
  private snap: any;

    constructor(
    width: number,
    height: number
  ) {
    this.snap = Snap(width, height);
  }

  addCircles(circles: Circle[]) {
    for (let c of circles) {
      console.log(c.x);
      this.snap
        .circle(c.x, c.y, c.r)
        .attr({
          fill: "none",
          stroke: "#000",
          strokeWidth: 0.04
        });
    }
    return this;
  }

  scale() {
    var bbox = this.snap.getBBox();
    var viewBox = bbox.x + " " + bbox.y + " " + bbox.width + " " + bbox.height;
    this.snap.attr({
      width: 400,
      height: 400,
      preserveAspectRatio: true,
      viewBox: '0 0 100 100'
    });
  }
}
