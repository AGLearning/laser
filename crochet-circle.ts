import "snapsvg-cjs";

declare var Snap: any;

const findPoint = function(r, cx, cy, t){
  return {
    x: r*Math.cos(t) + cx,
    y: r*Math.sin(t) + cy
  }
}

export class CrochetCircle {
  draw() {
    var margin = 10;
    var radius = 52;
    var holeMargin = 3;
    var numberOfHoles = 78;
    var holeRadius = 1;

    var s = Snap(2 * margin + 2 * radius, 2 * margin + 2 * radius);
    var bigCircle = s.circle(radius + margin, radius + margin, radius);
    bigCircle.attr({
      fill: "none",
      stroke: "#000",
      strokeWidth: 0.04
    });

    for (let i = 0; i < numberOfHoles; i++) {
      var angle = (2 * Math.PI * i) / numberOfHoles;
      var angleInDegrees = (angle * 180) / Math.PI;
      //CIRCLE
      var coordinates = findPoint(
        radius - holeMargin - holeRadius,
        margin + radius,
        margin + radius,
        (2 * Math.PI * i) / numberOfHoles
      );
      var hole = s
        .circle(coordinates.x, coordinates.y, holeRadius)
        .attr({ fill: "none", stroke: "#000", strokeWidth: 0.04 });
      //ELLIPSE
      //var xScale = 0.5;
      //var yScale = 2;
      //var coordinates = findPoint(radius-holeMargin-(yScale*holeRadius), margin + radius, margin + radius, 2*Math.PI*i/numberOfHoles);
      //var hole = s.ellipse(coordinates.x, coordinates.y, xScale*holeRadius,yScale*holeRadius)
      //              .attr({fill: "none", stroke: "#000", strokeWidth: 0.04, transform: "r"+(angleInDegrees+90)});
      //RECTANGE
      //var xScale = 0.5;
      //var yScale = 2;
      //var coordinates = findPoint(radius-holeMargin-(0.5*yScale*holeRadius), margin + radius, margin + radius, 2*Math.PI*i/numberOfHoles);
      //var transformString = "r"+(angleInDegrees+90)+","+(coordinates.x)+","+(coordinates.y);
      //var hole = s.rect(coordinates.x - 0.5*xScale*holeRadius, coordinates.y - 0.5*yScale*holeRadius, 2*xScale*holeRadius, 2*yScale*holeRadius, 0.2, 0.2)
      //              .attr({fill: "none", stroke: "#000", strokeWidth: 0.04, transform: transformString });
    }
  }
}
