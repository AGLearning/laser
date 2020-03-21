import { Circle } from "../model/circle";
import { Grid } from "../model/grid";

export const circlesOnGrid = (options: {
  xCount: number;
  yCount: number;
  circleRadius?: number;
  gridSize?: number;
}) => {
  const radius = options.circleRadius || Circle.defaultRadius;
  const gridSize = options.gridSize || Grid.defaultSize;

  let circles = [];
  for (let i = 1; i <= options.xCount; i++) {
    for (let j = 1; j <= options.xCount; j++) {
      circles.push(new Circle(i * gridSize, j * gridSize, radius));
    }
  }

  return circles;
};
