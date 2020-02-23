import "snapsvg-cjs";

declare var Snap: any;

export class SvgBuilder {
  private snap: any;

  /***
   * unit - in mm (bok kratki)
   */
  constructor(
    width: number,
    height: number,
    private unit: number,
    private radius: number
  ) {
    this.snap = Snap(width * unit, height * unit);
  }

  addPoints(points: { x: number; y: number }[]) {
    for (let point of points) {
      this.snap
        .circle(point.x * this.unit, point.y * this.unit, this.radius)
        .attr({
          fill: "none",
          stroke: "#000",
          strokeWidth: 0.04
        });
    }
    return this;
  }

  build() {
    var bbox = this.snap.getBBox();
    var viewBox = bbox.x + " " + bbox.y + " " + bbox.width + " " + bbox.height;
    this.snap.attr({
      viewBox: viewBox
    });
  }
}
