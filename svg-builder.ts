import "snapsvg-cjs";

declare var Snap: any;
import { Circle } from "./model/circle";
import { CrossStitch } from "./model/cross-stitch";

export class SvgBuilder {
  private snap: any;

  constructor(width: number, height: number) {
    this.snap = Snap(width, height);
  }

  addCircles(circles: Circle[]) {
    for (let c of circles) {
      console.log(c.x);
      this.snap.circle(c.x, c.y, c.r).attr({
        fill: "none",
        stroke: "#000",
        strokeWidth: 0.04
      });
    }
    return this;
  }

  addCrossStitches(
    stitches: CrossStitch[],
    options: {
      radius: number;
      width: number;
    } = {}
  ) {
    const radius = options.radius || CrossStitch.defaultRadius;
    const width = options.width || CrossStitch.defaultWidth;
    const gridSize = 3 * radius;
    let minX = 0;
    let maxX = 0;
    let minY = 0;
    let maxY = 0;
    for (let s of stitches) {
      if (minX > s.x) {
        minX = s.x;
      }

      if (maxX < s.x) {
        maxX = s.x;
      }

      if (minY > s.y) {
        minY = s.y;
      }

      if (maxY < s.y) {
        maxY = s.y;
      }

      this.snap
        .line(
          s.x * gridSize - radius,
          s.y * gridSize - radius,
          s.x * gridSize + radius,
          s.y * gridSize + radius
        )
        .attr({
          fill: "none",
          stroke: s.color,
          strokeWidth: width
        });

      this.snap
        .line(
          s.x * gridSize - radius,
          s.y * gridSize + radius,
          s.x * gridSize + radius,
          s.y * gridSize - radius
        )
        .attr({
          fill: "none",
          stroke: s.color,
          strokeWidth: width
        });
    }

    for (let i = minX+1; i <= maxX + 1; i = i + 1) {
      this.snap
        .line(
          i * gridSize - radius - width / 2,
          minY * gridSize - gridSize,
          i * gridSize - radius - width / 2,
          (maxY + 1) * gridSize
        )
        .attr({
          fill: "none",
          stroke: "#aaaaaa",
          strokeWidth: 0.5
        });
    }

    for (let i = minY+1; i <= maxY + 1; i = i + 1) {
      this.snap
        .line(
          minX * gridSize - gridSize,
          i * gridSize - radius - width / 2,
          (maxX + 1) * gridSize,
          i * gridSize - radius - width / 2,
        )
        .attr({
          fill: "none",
          stroke: "#aaaaaa",
          strokeWidth: 0.5
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
      viewBox: "0 0 100 100"
    });
  }
}
