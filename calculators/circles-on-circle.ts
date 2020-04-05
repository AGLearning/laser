import { Circle } from "../model/circle";

const findCoordinates = function(r, cx, cy, t) {
  return {
    x: r * Math.cos(t) + cx,
    y: r * Math.sin(t) + cy
  };
};

export const circlesOnCircle = (options: {
  radius: number;
  circlesNumber: number;
  circleRadius?: number;
  circleMargin?: number;
}) => {
  const radius = options.radius;
  const circlesNumber = options.circlesNumber;
  const circleRadius = options.circleRadius || Circle.defaultRadius;
  const circleMargin = options.circleMargin || 3;

  const circles = [];
  for (let i = 0; i < circlesNumber; i++) {
    var angle = (2 * Math.PI * i) / circlesNumber;
    var angleInDegrees = (angle * 180) / Math.PI;

    var coordinates = findCoordinates(
      radius - circleMargin - circleRadius,
      radius,
      radius,
      (2 * Math.PI * i) / circlesNumber
    );
    circles.push(new Circle(coordinates.x, coordinates.y, circleRadius));
  }

  return circles;
};
